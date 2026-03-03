import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProjectPage from './views/ProjectPage.vue'
import ResumePage from './views/ResumePage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/resume', name: 'resume', component: ResumePage },
  { path: '/project/:slug', name: 'project', component: ProjectPage, props: true }
]

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})
