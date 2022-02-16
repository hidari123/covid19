import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Echarts from './plugins/echarts'
import './assets/css/commen.css'

Vue.use(Echarts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
