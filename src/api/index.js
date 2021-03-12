import Ajax from './ajax'
///api/product/getBaseCategoryList
//三级菜单  get 
export const CategoryList = ()=>{
  return  Ajax({
        url:'product/getBaseCategoryList',
        method:'get',
    })
}