import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingView from '../views/WritingView.vue'
import MusicView from '../views/MusicView.vue'
import PhotographyView from '../views/PhotographyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/writing',
    name: 'writing',
    component: WritingView
  },
  {
    path: '/music',
    name: 'music',
    component: MusicView
  },
  {
    path: '/photography',
    name: 'photography',
    component: PhotographyView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
