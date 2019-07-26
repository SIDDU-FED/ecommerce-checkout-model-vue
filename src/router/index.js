import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage/HomePage'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-component',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
