import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    data: {
      value: 0,
      variables: {
        a: 0,
        b: 0
      }
    }
  },

  mutations: {
    setA (state, val) {
      state.data.variables.a = val
    },
    setB (state, val) {
      state.data.variables.b = val
    },
    setValue (state, val) {
      state.data.value = val
    }
  },

  actions: {
    setA ({commit}, val) {
      commit('setA', val)
    },
    setB ({commit}, val) {
      commit('setB', val)
    },
    setValue ({commit}, val) {
      commit('setValue', val)
    }
  },

  getters: {
    getA: state => { return state.data.variables.a },
    getB: state => { return state.data.variables.b },
    getData: state => { return state.data }
  }
})
