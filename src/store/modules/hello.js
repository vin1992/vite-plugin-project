import api from '../api'
import fetch from '../fetch'

const module = {
  namespaced: true,
  state: {
    info: null,
  },
  mutations: {
    setInfo(state, payload) {
      state.info = payload
    },
  },
  actions: {
    async fetchInfo({ commit }) {
      const data = await fetch({
        url: api.info,
      })
      commit('setInfo', data)
    },
  },
}

export default module
