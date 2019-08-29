import * as type from '@/store/actionTypes'
import queries from '@/service/graphql'
import { useQueryHQL } from '@/service'
import _ from 'lodash'

const state = {
  posts: {}
}

const getters = {
  [type.home.getters.POSTS]: (state) => state.posts
}
const mutations = {
  [type.home.mutations.SET_POSTS](state, posts) {
    _.forEach(posts, (post, key) => {
      switch (key) {
        case 'hot':
          post.title = 'TOP TRUYỆN HOT'
          break
        case 'new':
          post.title = 'TRUYỆN MỚI CẬP NHẬP'
          break
        case '_tienhiep':
          post.title = 'TRUYỆN TIÊN HIỆP'
          break
        case '_ma':
          post.title = 'TRUYỆN MA'
          break
        case '_quan_truong':
          post.title = 'TRUYỆN QUAN TRƯỜNG'
          break
        default:
          post.title = ''
          break
      }
    })
    state.posts = posts
  }
}
const actions = {
  async [type.home.actions.FETCH]({ commit }, params) {
    const { data: posts, error } = await useQueryHQL(queries.query.getHomePosts, {
      first: 12
    })
    if (!error) {
      commit(type.home.mutations.SET_POSTS, posts)
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
