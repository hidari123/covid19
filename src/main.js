import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Echarts from './plugins/echarts'
import axios from 'axios' // 安装axios后引入
import Tabs from './components/tabs'
import './plugins/vant'

import '@/assets/world'
import '@/assets/chinaMapJs/anhui'
import '@/assets/chinaMapJs/aomen'
import '@/assets/chinaMapJs/beijing'
import '@/assets/chinaMapJs/chongqing'
import '@/assets/chinaMapJs/fujian'
import '@/assets/chinaMapJs/gansu'
import '@/assets/chinaMapJs/guangdong'
import '@/assets/chinaMapJs/guangxi'
import '@/assets/chinaMapJs/guizhou'
import '@/assets/chinaMapJs/hainan'
import '@/assets/chinaMapJs/hebei'
import '@/assets/chinaMapJs/heilongjiang'
import '@/assets/chinaMapJs/henan'
import '@/assets/chinaMapJs/hubei'
import '@/assets/chinaMapJs/hunan'
import '@/assets/chinaMapJs/jiangsu'
import '@/assets/chinaMapJs/jiangxi'
import '@/assets/chinaMapJs/liaoning'
import '@/assets/chinaMapJs/neimenggu'
import '@/assets/chinaMapJs/ningxia'
import '@/assets/chinaMapJs/qinghai'
import '@/assets/chinaMapJs/shaanxi'
import '@/assets/chinaMapJs/shandong'
import '@/assets/chinaMapJs/shanghai'
import '@/assets/chinaMapJs/shanxi'
import '@/assets/chinaMapJs/sichuan'
import '@/assets/chinaMapJs/taiwan'
import '@/assets/chinaMapJs/tianjin'
import '@/assets/chinaMapJs/xianggang'
import '@/assets/chinaMapJs/jilin'
import '@/assets/chinaMapJs/xinjiang'
import '@/assets/chinaMapJs/xizang'
import '@/assets/chinaMapJs/yunnan'
import '@/assets/chinaMapJs/zhejiang'

import './assets/css/commen.css'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(Tabs)
Vue.use(Echarts)

Vue.prototype.$axios = axios // 将axios挂载到原型上方便使用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
