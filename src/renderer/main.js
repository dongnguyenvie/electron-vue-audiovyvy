import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Filter from '@/common/filter'
import APlayer from '@moefe/vue-aplayer'
import 'vuetify/dist/vuetify.min.css'
import Toasted from 'vue-toasted'
import $bus from '@/_eventBus'

Vue.use(Toasted)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(APlayer, {
  defaultCover: 'https://audiovyvy.com/wp-content/themes/audio_quynh_ver_two/img/logo.png',
  productionTip: false
})

Vue.use(Vuetify)
Filter(Vue)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // vuetify: new Vuetify(),
  render: (h) => h(App),
  created() {
    console.log(this)
    $bus.$on('showHandleError', (messages) => {
      this.$toasted.error(messages, {
        theme: 'bubble',
        position: 'bottom-right',
        duration: 5000
      })
    })
  }
}).$mount('#app')
