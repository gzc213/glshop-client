/*
 * @Author: your name
 * @Date: 2021-03-12 16:21:55
 * @LastEditTime: 2021-03-22 18:12:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-glshop\src\store\index.js
 */
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