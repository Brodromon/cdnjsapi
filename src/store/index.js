import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libName: ''
  },
  mutations: {
    increment (state, payload) {
      state.libName = payload.name
    }
  },
  getters: {
    getLibName: state => {
      return state.libName
    }
  }
})
