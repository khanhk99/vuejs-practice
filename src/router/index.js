import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: () => import('../views/Demo1.vue')
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import('../views/Demo2.vue')
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: () => import('../views/Demo3.vue'),
    children: [
      {
        path: 'login',
        name: 'Demo3Login'
      },
      {
        path: 'register',
        name: 'Demo3Register'
      },
      {
        path: 'home',
        name: 'Demo3Home'
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
