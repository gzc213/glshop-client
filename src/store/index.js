import Vue from 'vue'
import Vuex from 'vuex'
import typeNav from '@/store/typeNav'
import search from '@/store/search'
import deatail from '@/store/deatail'
import addCart from '@/store/addCart'
import user from '@/store/user'

Vue.use(Vuex)

const actions = {}
const state = {}
const mutations = {}
const getters = {}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    typeNav,
    search,
    deatail,
    addCart,
    user
  }
})
export default store