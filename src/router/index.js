import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Project1',
    component: () => import('../views/Project1.vue')
  },
  {
    path: '/project2',
    name: 'Project2',
    component: () => import('../views/Project2.vue')
  },
  {
    path: '/project3',
    name: 'Project3',
    component: () => import('../views/Project3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
