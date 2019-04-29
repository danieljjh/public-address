import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user-sharing',
      component: () => import('@/views/user-sharing')
    },
    {
      path: '/car-wash',
      name: 'car-wash',
      component: () => import('@/views/car-wash')
    },
    {
      path: '/company-profile',
      name: 'company-profile',
      component: () => import('@/views/company-profile')
    },
    {
      path: '/tech-recruitment',
      name: 'tech-recruitment',
      component: () => import('@/views/tech-recruitment')
    },
    {
      path: '/tech-promotion',
      name: 'tech-promotion',
      component: () => import('@/views/tech-promotion')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my')
    }
  ]
})
