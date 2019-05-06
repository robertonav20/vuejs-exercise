import Axios from 'axios'

export const state = {
  items: 0,
  obj: []
}

export const mutations = {
  ADD_OBJ: (state, val) => {
    state.obj.push(val)
  },
  UPDATE_OBJ: (state, val) => {
    state.obj = val.map(item => {
      return item
    })
  },
  UPDATE_ITEMS: (state, val) => {
    state.items = val
  },
  ADD_ITEMS: (state) => {
    state.items++
  }
}

export const actions = {
  ADD_OBJ: ({commit}, val) => {
    commit('ADD_OBJ', val)
    commit('ADD_ITEMS')
  },
  ADD_ITEMS: ({commit}) => {
    commit('ADD_ITEMS')
  },
  GET_CARS: ({commit}) => {
    Axios.get('http://localhost:9090/items/cars')
      .then(res => {
        commit('UPDATE_OBJ', res.data.cars)
        commit('UPDATE_ITEMS', res.data.cars.length)
      })
      .catch(error => {
        console.log('Error CALL getCars!')
        console.log(error)
      })
  }
}

export const getters = {
  getItems: state => {
    return state.items
  },
  getObj: state => {
    return state.obj
  }
}
