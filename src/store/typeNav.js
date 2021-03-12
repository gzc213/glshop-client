//三级导航中的小store
import {CategoryList} from '@/api'
const state ={
    dateCategoryList:[]
}
const mutations ={
    RESOVE_CATEGORYLIST(state,dateCategoryList){
        state.dateCategoryList = dateCategoryList
    }
}
const actions ={
    async getCategoryList({commit}){
        const result = await CategoryList()
        console.log(result)
        if(result.code === 200){
            commit('RESOVE_CATEGORYLIST',result.data)
            // console.log(result.data)
        }
    }
   
}
const getters ={}
export default {
    actions,
    state,
    mutations,
    getters
}