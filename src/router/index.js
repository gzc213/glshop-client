
import Vue from "vue";
import VueRouter from 'vue-router'
import routes from '@/router/routes'
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, resolved, rejected) {
    if (!resolved && !rejected) routerPush.call(this, location).catch(() => {})
    else routerPush.call(this, location, resolved, rejected)
}
export default router