import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home'
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component:_import('Home')
  },
  {
    path: '/about',
    name: 'About',
    component:_import('About')
  }
];

const router = new VueRouter({
  routes
});

export default router
