import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    a: 0,
    b: 0
  },

  mutations: {
    setA (state, val) {
      state.a = val
    },
    setB (state, val) {
      state.B = val
    }
  },

  actions: {
    setA ({commit}, val) {
      commit('setA', val)
    },
    setB ({commit}, val) {
      commit('setB', val)
    }
  },

  getters: {
    getA: state => { return state.a },
    getB: state => { return state.b }
  }
})
