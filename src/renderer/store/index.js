import Vue from 'vue'
import Vuex from 'vuex'

// import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

console.log(999999, modules)

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  actions: {
    dongdong({ commit }, params) {
      alert(params)
    },
    CLEAR_TODOS ({ commit }) {
      alert(11111111111111111)
    }
  },
  // plugins: [createPersistedState(), createSharedMutations()],
  strict: process.env.NODE_ENV !== 'production'
})
