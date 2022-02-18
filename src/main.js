import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Echarts from './plugins/echarts'
import axios from 'axios' // 安装axios后引入
import Tabs from './components/tabs'

import '@/assets/world'
import './assets/css/commen.css'

Vue.use(Tabs)
Vue.use(Echarts)

Vue.prototype.$axios = axios // 将axios挂载到原型上方便使用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
