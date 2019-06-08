import Vue from 'vue'
import Router from 'vue-router'
import Casa from '@/components/Casa'
import Controle from '@/components/Controle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Casa',
      component: Casa
    },
    {
      path: '/controle',
      name: 'Controle',
      component: Controle
    }
  ]
})
