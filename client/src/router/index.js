import Vue from 'vue'
import Router from 'vue-router'
import Utama from '@/components/Utama'
import Allpost from '@/components/Allpost'
import Detail from '@/components/Detail'

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
        }
      ]
    }
  ]
})
