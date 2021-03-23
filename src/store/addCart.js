/*
 * @Author: your name
 * @Date: 2021-03-21 20:20:42
 * @LastEditTime: 2021-03-23 08:43:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-glshop\src\store\addCart.js
 */
import {
  addToCart,
  deleteShopAll,
  deleteShopOne,
  shopCartList,
  updataCheckCart,
  updataCheckCartAll,
  updataShopCartList
} from '@/api'
const state = {
  shopCartList: []
}
const mutations = {
  RESOVE_SHOPCARTLIST (state, shopCartList) {
    state.shopCartList = shopCartList
  }
}
const actions = {
  //添加到购物车
  async getAddToCart ({
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
  },

  async getShopCartList ({
    commit
  }) {
    const result = await shopCartList()
    if (result.code === 200) {
      commit('RESOVE_SHOPCARTLIST', result.data)
    }
  },
  //更新购物车数量
  async getUpdataShopCartList ({
    commit
  }, {
    skuId,
    skuNum
  }) {
    const result = await updataShopCartList(skuId, skuNum)
    if (result.code === 200) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  },
  //更新单个选定状态
  async getUpdataCheckCart ({
    commit
  }, {
    skuId,
    isChecked
  }) {
    const result = await updataCheckCart(skuId, isChecked)
    if (result.code === 200) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  },
  //更新多个选定状态
  async getUpdataCheckCartAll ({
    commit
  }, {
    isChecked,
    skuIds
  }) {
    const result = await updataCheckCartAll(isChecked, skuIds)
    if (result.code === 200) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  },
  //删除单个
  async getDeleteShopOne ({
    commit
  }, skuId) {
    const result = await deleteShopOne(skuId)
    if (result.code === 200) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  },
  //删除多个
  async getDeleteShopAll ({
    commit
  }, skuIds) {
    const result = await deleteShopAll(skuIds)
    if (result.code === 200) {
      return Promise.resolve()
    } else {
      return Promise.reject()
    }
  }
}
const getters = {
  //选中的个数
  checkedNum (state) {
    return state.shopCartList.reduce((prev, item) => {
      return prev += item.cartInfoList.reduce((prev1, item1) => {
        if (item1.isChecked) {
          prev1 += item1.skuNum
        }
        return prev1
      }, 0)
    }, 0);
  },
  //总价
  checkedPrice (state) {
    return state.shopCartList.reduce((prev, item) => {
      return prev += item.cartInfoList.reduce((prev1, item1) => {
        if (item1.isChecked) {
          prev1 += item1.cartPrice * item1.skuNum
        }
        return prev1
      }, 0)
    }, 0)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}