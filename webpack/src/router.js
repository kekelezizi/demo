import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
// import { homedir } from 'os';

Vue.use(Router);
export default new Router({
  mode : 'history',
  routes : [
    // {
    //   path : '/',
    //   redirect : '/home'
    // },
    {
      path : '/',
      name : 'home',
      component: Home
    },
    {
      path : '/learn',
      name : 'learn',
      component  : () => import('./views/Learn')
    },
    {
      path : '/student',
      name : 'student',
      component  : () => import('./views/Student')
    },
    {
      path : '/about',
      name : 'about',
      component  : () => import('./views/About')
    },
    {
      path : '/community',
      name : 'community',
      component  : () => import('./views/Community'),
      // 默认加载页面
      redirect : './community/academic',
      children : [
        {
          path : 'academic',
          name : 'academic',
          component : () => import('./views/Academic')
        },
        {
          path : 'download',
          name : 'download',
          component : () => import('./views/Download')
        },
        {
          path : 'personal',
          name : 'personal',
          component : () => import('./views/Personal')
        },
        {
          path : '/NotFound',
          component : () => import('./views/NotFound')
        },
        {
          path : '*',
          redirect (to) {
            if(to.path === '/'){
              return '/home';
            }else {
              return '/NotFound';
            }
          }
        },
      ]
    }
  ] 
})















// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })

