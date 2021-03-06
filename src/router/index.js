import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: "/:name",
    name: 'Library',
    component: () => import('../views/Library.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
