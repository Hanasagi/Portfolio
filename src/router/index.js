import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../components/Welcome.vue')
  },
  {
    path: '/info',
    component: () => import(/* webpackChunkName: "about" */ '../components/Home.vue')
  },
  {
    path: '/project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Project.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
