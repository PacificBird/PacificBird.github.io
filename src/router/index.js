import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WritingView from '../views/WritingView.vue'
import MusicView from '../views/MusicView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import WorkExperienceView from '../views/WorkExperienceView.vue'
import EducationView from '../views/EducationView.vue'
import SkillsView from '../views/SkillsView.vue'
import AwardsView from '../views/AwardsView.vue'
import ProjectsView from '../views/ProjectsView.vue'

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
  {
    path: '/workexperience',
    name: 'workexperience',
    component: WorkExperienceView
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/awards',
    name: 'awards',
    component: AwardsView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
