import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Buscar from '@/components/clientes/Buscar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: Buscar
    }
  ]
})
