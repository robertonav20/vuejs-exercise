import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NotFound from '@/components/NotFound'
import Portfolios from '@/components/portfolio/Portfolios'
import Stocks from '@/components/stocks/Stocks'

Vue.use(Router)

export const router = new Router({
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
      path: '/Portfolios',
      name: 'Portfolios',
      component: Portfolios
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
