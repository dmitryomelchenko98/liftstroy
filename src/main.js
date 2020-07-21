import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { http } from './axios-config.js'
import currencyFilter from './filters/currency.js'



Vue.filter('currency', currencyFilter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  http,
  render: h => h(App)
}).$mount('#app')
