import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NotFound from '@/components/NotFound'
import Portfolio from '@/components/Portfolio'
import Stocks from '@/components/Stocks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/Stocks',
      name: 'Stocks',
      component: Stocks
    },
    {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
