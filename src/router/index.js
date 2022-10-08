import ViewProject from '@/views/ViewProject.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project',
    name: 'viewProject',
    component: ViewProject
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
