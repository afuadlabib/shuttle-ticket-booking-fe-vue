import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignUpPage from '../views/SignUpPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/signin',
      name: 'signin',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage
    },
    
  ]
})
let isAuthenticated = false

router.beforeEach((to, from, next) => {
  if (localStorage.access_token) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }
  
  if (to.name === 'tickets' && !isAuthenticated) {
    next({ path: '/signin' })
  } else if ((to.name === 'signin' && isAuthenticated) || (to.name === 'signup' && isAuthenticated)) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
