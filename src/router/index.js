/*
 * @Author: your name
 * @Date: 2021-03-10 15:27:32
 * @LastEditTime: 2021-03-23 20:26:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-glshop\src\router\index.js
 */
import Vue from "vue";
import VueRouter from 'vue-router'
import routes from '@/router/routes'
Vue.use(VueRouter)
import store from '@/store'
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token
  let userInfo = store.state.user.userInfo
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (userInfo.name) {
        next()
      } else {
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          store.dispatch('clearToken')
          next('/login')
        }
      }
    }
  } else {
    next()
  }

})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolved, rejected) {
  if (!resolved && !rejected) routerPush.call(this, location).catch(() => { })
  else routerPush.call(this, location, resolved, rejected)
}
export default router