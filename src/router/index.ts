import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SocialsView from '@/views/SocialsView.vue'
import AboutMeView from '@/views/AboutMeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contacts',
      name: 'contact',
      component: SocialsView,
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMeView,
    },
  ],
})

export default router
