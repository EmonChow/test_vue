import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Home from '../components/Home.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
  
    {
      path: '/login',
      name: 'login',
      component: Login
      
    },

    {
      path: '/register',
      name: 'register',
      component: Registration
    },

    {
      path: '/home',
      name: 'home',
      component: Home
    },
    
    
  ]
})

export default router
