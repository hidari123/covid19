import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Spring from '../views/SpringView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city/:city',
    name: 'City',
    component: City,
    props: true
  },
  {
    path: '/spring/:cities',
    name: 'spring',
    component: Spring,
    props: true
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
