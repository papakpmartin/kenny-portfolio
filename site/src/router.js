import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProjectPage from './views/ProjectPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/project/:slug', name: 'project', component: ProjectPage, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
