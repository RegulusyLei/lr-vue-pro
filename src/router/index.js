import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('loginCache')) {
          next()
        }else{
          next('/login')
        }
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
