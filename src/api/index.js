import Ajax from './ajax'
import mockAjax from '@/api/mockAjax'
///api/product/getBaseCategoryList
//三级菜单  get 
export const CategoryList = ()=>{
  return  Ajax({
        url:'product/getBaseCategoryList',
        method:'get',
    })
}
export const ListContainer =()=>{
  return  mockAjax({
    url:'/banner',
    method:'get'
  })
}
export const FloorContainer =()=>{
  return  mockAjax({
    url:'/floor',
    method:'get'
  })
}
