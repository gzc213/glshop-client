/*
 * @Author: your name
 * @Date: 2021-03-12 15:05:50
 * @LastEditTime: 2021-03-21 20:19:47
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