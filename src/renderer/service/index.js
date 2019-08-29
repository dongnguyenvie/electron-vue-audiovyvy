import axios from 'axios'
import $bus from '@/_eventBus'

const API_BASE_URL = 'https://audiovyvy.com/graphql'

const HQL = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000
})
HQL.interceptors.request.use(
  function(config) {
    $bus.$emit('loading', true)
    // Do something before request is sent
    return config
  },
  function(error) {
    $bus.$emit('loading', true)
    // Do something with request error
    return Promise.reject(error)
  }
)
HQL.interceptors.response.use(
  function(response) {
    $bus.$emit('loading', false)
    return response
  },
  function(error) {
    $bus.$emit('loading', false)
    return Promise.reject(error.response)
  }
)

export const useQueryHQL = (queries, variables = {}) => {
  return new Promise((resolve, reject) => {
    HQL.post(null, { query: queries, variables })
      .then((response) => {
        const { data } = response
        if (data.errors && data.errors.length) {
          const message = data.errors.map((error) => error.message).join(' ')
          $bus.$emit('showHandleError', message)
        }
        resolve({ data: !data.errors ? data.data : {}, error: data.errors })
      })
      .catch((error) => {
        resolve({
          data: {},
          error: [{ category: 'graphql', message: 'error server!!!' }]
        })
      })
  })
}
export const useMutationHQL = (queries, variables = {}) => {
  return new Promise((resolve, reject) => {
    HQL.post(null, { mutation: queries, variables })
      .then((response) => {
        const { data } = response
        if (data.errors && data.errors.length) {
          const message = data.errors.map((error) => error.message).join(' ')
          $bus.$emit('showHandleError', message)
        }
        resolve({ data: !data.errors ? data.data : {}, error: data.errors })
      })
      .catch((error) => {
        resolve({
          data: {},
          error: [{ category: 'graphql', message: 'error server!!!' }]
        })
      })
  })
}
