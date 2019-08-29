// GOALS
export const SUBMIT = 'SUBMIT'
export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'
export const DONE = 'DONE'
export const FETCH = 'FETCH'

// POSTS
export const FETCH_POSTS_FOR_HOME_PAGE = 'FETCH_POSTS_FOR_HOME_PAGE'
export const SET_POSTS = 'SET_POSTS'
export const GET_POSTS_FOR_HOME = 'GET_POSTS_FOR_HOME'

// POST
export const FETCH_CONTENT_FOR_SINGLE_AUDIO = 'FETCH_CONTENT_FOR_SINGLE_AUDIO'
export const GET_POST = 'GET_POST'

export const category = {
  mutations: {
    SET: '',
    SET_POSTS: ''
  },
  getters: {
    CATEGORIES: '',
    POSTS: ''
  },
  actions: {
    FETCH_ALL: '',
    FETCH_POSTS: ''
  }
}

export const home = {
  getters: {
    POSTS: ''
  },
  mutations: {
    SET_POSTS: ''
  },
  actions: {
    FETCH: ''
  }
}

export const author = {
  getters: {
    AUTHORS: {}
  },
  mutations: {
    SET: ''
  },
  actions: {
    FETCH_ALL: ''
  }
}

export const singlePost = {
  getters: {
    CONTENT_POST: ''
  },
  mutations: {
    SET_CONTENT_POST: ''
  },
  actions: {
    FETCH_POST_BY_ID: ''
  }
}

const modules = {
  category,
  home,
  author,
  singlePost
}

console.log(`define Modules`, modules)

Object.keys(modules).forEach((nameModule) => {
  Object.keys(modules[nameModule]).forEach((nameMethod) => {
    Object.keys(modules[nameModule][nameMethod]).forEach((nameType) => {
      modules[nameModule][nameMethod][nameType] = `${nameModule}::${nameMethod}:${nameType}`
    })
  })
})
