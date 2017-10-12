import Vue from 'vue'
import Router from 'vue-router'
import Utama from '@/components/Utama'
import Allpost from '@/components/Allpost'
import Detail from '@/components/Detail'
import Dashboard from '@/components/Dashboard'
import ByCategory from '@/components/ByCategory'
import ByAuthor from '@/components/ByAuthor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Utama',
      component: Utama,
      children: [
        {
          path: '',
          component: Allpost
        },
        {
          path: 'read/:slug',
          component: Detail,
          props: true
        },
        {
          path: 'category/:cat',
          component: ByCategory,
          props: true
        },
        {
          path: 'author/:name',
          component: ByAuthor,
          props: true
        },
        {
          path: 'dashboard/',
          component: Dashboard,
          children: [
            {
              path: '',
              component: Allpost
            }
          ]
        }
      ]
    }
  ]
})
