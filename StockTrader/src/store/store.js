import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import * as portfolio from './modules/portfolio'
import * as items from './modules/items'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  mutations,
  actions,
  getters,
  modules: {
    items,
    portfolio
  }
})
