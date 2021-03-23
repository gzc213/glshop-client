import { detailPageInfo } from '@/api'
const state = {
  detailPageInfo: {}
}
const mutations = {
  RESOVE_DETAILPAGEINFO (state, detailPageInfo) {
    state.detailPageInfo = detailPageInfo
  }
}
const actions = {
  async getDetailPageInfo ({ commit }, skuId) {
    const result = await detailPageInfo(skuId)
    if (result.code === 200) {
      commit('RESOVE_DETAILPAGEINFO', result.data)
    }
  }
}
const getters = {
  skuInfo (state) {
    return state.detailPageInfo.skuInfo || {}
  },
  spuSaleAttrList (state) {
    return state.detailPageInfo.spuSaleAttrList || []
  },
  categoryView (state) {
    return state.detailPageInfo.categoryView || {}
  },
}
export default {
  state,
  mutations,
  actions,
  getters
}