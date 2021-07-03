import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Products from '../views/Products.vue';
import AddProduct from '../views/AddProduct.vue';
import EditProduct from '../views/EditProduct.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Products',
    component: Products,
  },
  {
    path: '/add',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/edit/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
