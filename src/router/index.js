import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home 
  },
  { 
    path: '/about', 
    name: 'About', 
    component: About 
  },
  { 
    path: '/skills', 
    name: 'My-skills', 
    component: Skills 
  },
  { 
    path: '/projects', 
    name: 'Projects', 
    component: Projects 
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: Contact 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
