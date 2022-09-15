import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import AddSignup from '../views/AddSignup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
  
    {
      path: '/login-page',
      name: 'login',
      component: Login
    },

    {
      path: '/sign-up',
      name: 'register',
      component: Signup
    },
    {
      path: '/add-signup',
      name: 'addregister',
      component: AddSignup
    },
  ]
})

export default router
