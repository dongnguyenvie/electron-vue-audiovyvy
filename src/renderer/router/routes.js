import DefaultContainer from '@/container/DefaultContainer'

const pages = {
  path: '/',
  component: DefaultContainer,
  children: [
    {
      path: '',
      name: 'home-page',
      meta: {
        label: 'Home page',
        title: 'Home page'
      },
      component: () => import('@/views/Home.vue')
    },
    {
      path: 'post/:slug',
      name: 'post',
      meta: {
        label: 'single audio page',
        title: 'single audio page'
      },
      component: () => import('../views/Single.vue')
    }
  ]
}

export default [pages]
