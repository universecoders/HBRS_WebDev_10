import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/home/:chunk',
    name: 'chunk',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/home/:chunk/:side',
    name: 'side',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
