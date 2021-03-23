import { goodsListInfo } from '@/api'
const state = {
  goodsListInfo: {}
}
const mutations = {
  RESOVE_GOODSLISTINFO (state, goodsListInfo) {
    state.goodsListInfo = goodsListInfo
  }
}
const actions = {
  async getGoodsListInfo ({ commit }, searchInfoParams) {
    const result = await goodsListInfo(searchInfoParams)
    if (result.code === 200) {
      commit('RESOVE_GOODSLISTINFO', result.data)
    }
  }
}
const getters = {
  attrsList (state) {
    return state.goodsListInfo.attrsList
  },
  goodsList (state) {
    return state.goodsListInfo.goodsList
  },
  trademarkList (state) {
    return state.goodsListInfo.trademarkList
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}