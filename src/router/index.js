import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Demo.vue')
  }
];

// console.log('process.env :>> ', process.env);
const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
});
export default router;
