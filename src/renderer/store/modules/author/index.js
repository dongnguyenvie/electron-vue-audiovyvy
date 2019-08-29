import * as type from '../../actionTypes'
import queries from '@/service/graphql'
import { useQueryHQL } from '@/service'
import _ from 'lodash'

const state = {
  authors: {}
}

const getters = {
  [type.author.getters.AUTHORS]: (state) => state.authors
}
const mutations = {
  [type.author.mutations.SET](state, authors) {
    state.authors = authors
  }
}
const actions = {
  async [type.author.actions.FETCH_ALL]({ commit }, params) {
    const {
      data: { users: authors },
      error
    } = await useQueryHQL(queries.query.getAuthor)
    if (!error) {
      commit(type.author.mutations.SET, authors)
    }
  }
}

export default {
  namespaced: true,
  getters,
  actions,
  state,
  mutations
}
