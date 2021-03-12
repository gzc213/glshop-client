import Vue from "vue";
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isDis:true
            }
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isDis:true
            }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
const routerPush = VueRouter.prototype.push

VueRouter.prototype.push = function(location,resolved,rejected){
    if(!resolved && !rejected) routerPush.call(this,location).catch(()=>{})
    else routerPush.call(this,location)
}   
export default router