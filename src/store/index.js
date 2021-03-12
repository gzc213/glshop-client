import Vue from 'vue'
import Vuex from 'vuex'
import typeNav from '@/store/typeNav'
Vue.use(Vuex)

const actions ={}
const state ={}
const mutations ={}
const getters ={}
const store =new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{
        typeNav
    }
})
export default store