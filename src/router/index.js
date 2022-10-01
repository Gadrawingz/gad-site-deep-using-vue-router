import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import Course from '../views/courses/Course.vue'
import Courses from '../views/courses/Courses.vue'
import Hobbies from '../views/hobbies/Hobbies.vue'
import HobbyDetails from '../views/hobbies/HobbyDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/course/:id',
    name: 'Course',
    component: Course
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: Hobbies
  },
  {
    path: '/hobby/:id',
    name: 'Hobby',
    component: HobbyDetails
  },

  // Redirect example;
  {
    path: '/all-courses',
    redirect: '/jobs',
  },

  // Caching all 404: NotFound pages
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
