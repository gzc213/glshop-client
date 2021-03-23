import { userInfo, phoneCode, userLogin, userRegister, logout } from '@/api'
import { getUserTempId } from '@/util/userAbout'
const state = {
  userTempId: getUserTempId(),
  code: '',
  token: localStorage.getItem('TOKEN_KEY'),
  userInfo: {}
}
const mutations = {
  RESOVE_CODE (state, code) {
    state.code = code
  },
  RESOVE_TOKEN (state, token) {
    state.token = token
  },
  RESOVE_USERINFO (state, userInfo) {
    state.userInfo = userInfo
  },
  RESET_TOKEN (state) {
    state.token = ''
  },
  RESET_USERINFO (state) {
    state.token = '';
    state.userInfo = {}
  }
}
const actions = {
  //注册 
  async getPhoneCode ({ commit }, phone) {
    const result = await phoneCode(phone)
    if (result.code === 200) {
      commit('RESOVE_CODE', result.data)
      return result.data
    } else {
      return Promise.reject()
    }
  },
  async getUserRegister ({ commit }, userInfo) {
    const result = await userRegister(userInfo)
    if (result.code === 200) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  },
  //登录
  async getUserLogin ({ commit }, userInfo) {
    const result = await userLogin(userInfo)
    if (result.code === 200) {
      commit('RESOVE_TOKEN', result.data.token)
      localStorage.setItem('TOKEN_KEY', result.data.token)
      console.log('11111')
      return 'ok'
    } else {
      return Promise.reject()
    }
  },
  // 根据token获取用户信息
  async getUserInfo ({ commit }) {
    const result = await userInfo()
    if (result.code === 200) {
      commit('RESOVE_USERINFO', result.data)
      return result.data.name
    } else {
      return Promise.reject()
    }
  },
  //用户信息获取失败后
  async clearToken ({ commit }) {
    commit('RESET_TOKEN')
    localStorage.removeItem('TOKEN_KEY')
  },
  //退出登录
  async resetLogout ({ commit }) {
    const result = await logout()
    if (result.code === 200) {
      commit('RESET_USERINFO')
      localStorage.removeItem('TOKEN_KEY')
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}