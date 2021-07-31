import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Welcome/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Home
  },
  {
    path: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Home/Home')
  },
   {
    path: '/project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Project/Project')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
