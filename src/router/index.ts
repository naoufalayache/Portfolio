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
      meta: {
        titleKey: 'pageTitles.home',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        titleKey: 'pageTitles.projects',
      },
    },
    {
      path: '/contacts',
      name: 'contact',
      component: SocialsView,
      meta: {
        titleKey: 'pageTitles.contact',
      },
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMeView,
      meta: {
        titleKey: 'pageTitles.about',
      },
    },
  ],
})

export default router
