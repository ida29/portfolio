import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Works from '@/components/Works'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    }
  ]
})
