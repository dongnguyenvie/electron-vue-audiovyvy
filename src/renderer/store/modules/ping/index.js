import { useQueryHQL as HQL } from '../../../service'

const state = {
  posts: {}
}

const getters = {}
const mutations = {}
const actions = {
  async fetchPosts({ commit, state }, params) {
    const res = await HQL.post(null, {
      query: `
        query GET_POSTS {
          posts {
            edges {
              node {
                id
                title
                date
                content
              }
            }
          }
        }
        `
    })
    state.posts = res.data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
