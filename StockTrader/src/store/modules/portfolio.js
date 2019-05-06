export const state = {
  myItems: 0,
  myObj: []
}

export const mutations = {
  ADD_MYOBJ: (state, val) => {
    state.myObj.push(val)
  },
  ADD_MYITEMS: (state) => {
    state.myItems++
  },
  DELETE_MYOBJ: (state, val) => {
    state.myObj.pop(val)
  },
  DELETE_MYITEMS: (state, val) => {
    state.myItems--
  }
}

export const actions = {
  ADD_MYOBJ: ({commit}, val) => {
    commit('ADD_MYOBJ', val)
    commit('ADD_MYITEMS')
  },
  ADD_ITEMS: ({commit}) => {
    commit('ADD_ITEMS')
  },
  DELETE_MYOBJ: ({commit}, val) => {
    commit('DELETE_MYOBJ', val)
  }
}

export const getters = {
  getMyItems: state => {
    return state.myItems
  },
  getMyObj: state => {
    return state.myObj
  }
}
