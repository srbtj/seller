// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Goods from 'components/goods/Goods.vue';
import Sellers from 'components/sellers/Sellers.vue';
import Ratings from 'components/ratings/Ratings.vue';

/* eslint-disable no-new */
Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: Goods},
  {path: '/ratings', component: Ratings},
  {path: '/sellers', component: Sellers}
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'  // 全局配置选中路由时的样式
});

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
});

