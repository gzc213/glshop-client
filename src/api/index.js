/*
 * @Author: your name
 * @Date: 2021-03-12 15:05:50
 * @LastEditTime: 2021-03-23 19:56:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-glshop\src\api\index.js
 */
import Ajax from './ajax'
import mockAjax from '@/api/mockAjax'
///api/product/getBaseCategoryList
//三级菜单  get 
export const CategoryList = () => {
  return Ajax({
    url: 'product/getBaseCategoryList',
    method: 'get',
  })
}
//search页面  post /api/list
export const goodsListInfo = (searchInfoParams) => {
  return Ajax({
    url: '/list',
    method: 'post',
    data: searchInfoParams
  })
}
//详情页面  /api/item/{ skuId } get
export const detailPageInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: 'get'
  })
}
///api/cart/addToCart/{ skuId }/{ skuNum } 购物车
export const addToCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
}
///api/cart/cartList  跳转到购物车  get
export const shopCartList = () => {
  return Ajax({
    url: '/cart/cartList',
    method: 'get'
  })
}
// /api/cart/addToCart/{ skuId }/{ skuNum } 对购物车已有的物品进行修改 post
export const updataShopCartList = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
}
///api/cart/checkCart/{skuID}/{isChecked}    修改单个选定状态   get 
export const updataCheckCart = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
  })
}
///api/cart/batchCheckCart/{isChecked} post    批量修改选中状态
// isChecked   1或者0                               params参数
// skuIds       要修改的购物车商品的id组成的数组      body参数
export const updataCheckCartAll = (isChecked, skuIds) => {
  return Ajax({
    url: `/cart/batchCheckCart/${isChecked}`,
    method: 'post',
    data: skuIds
  })
}
///api/cart/deleteCart/{skuId} delete   删除单个
export const deleteShopOne = (skuId) => {
  return Ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
  })
}
// /api/cart/batchDeleteCart delete 删除多个
export const deleteShopAll = (skuIds) => {
  return Ajax({
    url: '/cart/batchDeleteCart',
    method: 'delete',
    data: skuIds
  })
}
// /api/user/passport/sendCode/{phone}   get  请求验证码
export const phoneCode = (phone) => {
  return Ajax({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })
}
///api/user/passport/register  注册用户   post
export const userRegister = (userInfo) => {
  return Ajax({
    url: '/user/passport/register',
    method: 'post',
    data: userInfo
  })
}
///api/user/passport/login 登录 post 
export const userLogin = (userInfo) => {
  return Ajax({
    url: '/user/passport/login',
    method: 'post',
    data: userInfo
  })
}

// /api/user/passport/auth/getUserInfo   get  根据token获取用户信息
export const userInfo = () => {
  return Ajax({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
  })
}
// /api/user/passport/logout 退出登录 get 
export const logout = () => {
  return Ajax({
    url: '/user/passport/logout',
    method: 'get'
  })
}






export const ListContainer = () => {
  return mockAjax({
    url: '/banner',
    method: 'get'
  })
}
export const FloorContainer = () => {
  return mockAjax({
    url: '/floor',
    method: 'get'
  })
}