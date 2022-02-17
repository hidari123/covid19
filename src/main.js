import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Echarts from './plugins/echarts'
import './assets/css/commen.css'
import axios from 'axios' // 安装axios后引入
Vue.prototype.$axios = axios // 将axios挂载到原型上方便使用

Vue.use(Echarts)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
