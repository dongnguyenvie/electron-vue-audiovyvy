import * as type from '@/store/actionTypes'
import queries from '@/service/graphql'
import { useQueryHQL } from '@/service'
// import _ from 'lodash'

const state = {
  post: {}
}
const getters = {
  [type.singlePost.getters.CONTENT_POST]: (state) => {
    // if (state.post.audioJson) {
    //   state.post.audio = []
    //   _.forEach(state.post.audioJson, (v, k) => {
    //     state.post.audio.push({
    //       url: v,
    //       name: k,
    //       artist: 'Quỷnh is'
    //     })
    //   })
    // }
    return state.post
  }
}
const mutations = {
  [type.singlePost.mutations.SET_CONTENT_POST](state, post) {
    post.audioVideo = JSON.parse(post.audioVideo)
    state.post = post
  }
}
const actions = {
  async [type.singlePost.actions.FETCH_POST_BY_ID]({ commit }, id) {
    const {
      data: { post },
      error
    } = await useQueryHQL(queries.query.getContenPost, {
      id: id
    })
    if (!error) {
      commit(type.singlePost.mutations.SET_CONTENT_POST, post)
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
