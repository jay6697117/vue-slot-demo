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
  }
];

console.log('process.env :>> ', process.env);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
console.log('router :>> ', router);
console.log('router.options :>> ', router.options);

export default router;
