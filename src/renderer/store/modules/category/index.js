import * as type from '../../actionTypes'
import queries from '@/service/graphql'
import { useQueryHQL } from '@/service'
import _ from 'lodash'

const state = {
  categories: {}
}

const getters = {
  [type.category.getters.CATEGORIES]: (state) => state.categories
}
const mutations = {
  [type.category.mutations.SET](state, categories) {
    state.categories = categories
  }
}
const actions = {
  async [type.category.actions.FETCH_ALL]({ commit }, params) {
    const {
      data: { categories },
      error
    } = await useQueryHQL(queries.query.getCategories, {
      first: 10
    })
    if (!error) {
      commit(type.category.mutations.SET, categories)
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
