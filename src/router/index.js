import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home/:chunk',
    name: 'chunk',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/home/:chunk/:side',
    name: 'side',
    component: () => import('../views/Home.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
