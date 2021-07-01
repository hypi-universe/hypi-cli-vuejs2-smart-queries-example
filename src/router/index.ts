import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Products from '../views/Products.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Products',
    component: Products,
  },
  {
    path: '/add',
    name: 'Add Product',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/products/:id',
    name: 'Edit Product',
    component: () => import('../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
