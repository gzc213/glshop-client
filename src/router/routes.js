import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default [{
  path: '/shopcart',
  component: ShopCart,
},
{
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