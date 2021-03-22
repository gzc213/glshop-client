/*
 * @Author: your name
 * @Date: 2021-03-20 18:28:26
 * @LastEditTime: 2021-03-22 08:38:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-glshop\src\router\routes.js
 */
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from '@/pages/AddCartSuccess'
export default [{
        path: '/addcart',
        component: AddCartSuccess,
        name: 'addCart'
    },
    {
        path: '/detail/:skuId?',
        component: Detail
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isDis: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isDis: true
        }
    },
    {
        path: '/',
        redirect: '/home'
    }
]