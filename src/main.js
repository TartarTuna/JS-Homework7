import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import Vue2Editor from 'vue2-editor'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.$ = $

Vue.component('Loading', Loading)
Vue.use(VueAxios, axios)
Vue.use(Vue2Editor)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
