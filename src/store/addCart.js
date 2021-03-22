import {
    addToCart
} from '@/api'
const state = {}
const mutations = {}
const actions = {
    async getAddToCart({
        commit
    }, {
        skuId,
        skuNum
    }) {
        const result = await addToCart(skuId, skuNum)
        if (result.code === 200) {
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