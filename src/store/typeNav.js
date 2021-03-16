//三级导航中的小store
import {CategoryList,ListContainer,FloorContainer} from '@/api'
const state ={
    dateCategoryList:[],
    dataListcontainer:[],
    dataFloorList:[]
}
const mutations ={
    RESOVE_CATEGORYLIST(state,dateCategoryList){
        state.dateCategoryList = dateCategoryList
    },
    RESOVE_DATALISTCONTAINERLIST(state,dataListcontainer){
        state.dataListcontainer = dataListcontainer
    },
    RESOVE_DATAFLOORLIST(state,dataFloorList){
        state.dataFloorList = dataFloorList
    }
}
const actions ={
    async getCategoryList({commit}){
        const result = await CategoryList()
        if(result.code === 200){
            commit('RESOVE_CATEGORYLIST',result.data)
        }
    },
    async getListcontainer({commit}){
        const result =await ListContainer()
        console.log(result)
        if(result.code === 200){
            commit('RESOVE_DATALISTCONTAINERLIST',result.data)
        }
    },
    async getdataFloorList({commit}){
        const result = await FloorContainer()
        console.log(result)
        if(result.code===200){
            commit('RESOVE_DATAFLOORLIST',result.data)
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