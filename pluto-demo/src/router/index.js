import Vue from 'vue'
import Router from 'vue-router'
import PageView from '../layouts/PageView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: PageView,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Home'),
      redirect: '/home/promenu',
      children: [{
        path: '/home/promenu',
        name: 'promenu',
        component: () => import('@/pages/pro-menu/ProMenu')
      },
      {
        path: '/home/project',
        name: 'project',
        component: () => import('@/pages/pro-menu/Project')
      },
      {
        path: '/home/personmanage',
        name: 'personmanage',
        component: () => import('@/pages/pro-menu/PersonManage'),
        children: [{
          path: '/home/personmanage/addperson',
          name: 'addperson',
          component: () => import('@/pages/pro-menu/AddPerson')
        }]
      }
      ]
    }]
  }]
})
