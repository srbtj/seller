// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Goods from 'components/goods/Goods.vue';
import Sellers from 'components/sellers/Sellers.vue';
import Ratings from 'components/ratings/Ratings.vue';

/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);

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
  components: {App},
  created() {
    // 设置 html font-size
    this.setFontSize();
    this.changeScreen();
  },
  methods: {
    setFontSize() { // 设置html字体大小
      let oHtml = document.querySelector('html');
      let rect = oHtml.getBoundingClientRect();
      let width = rect.width;
      oHtml.style.fontSize = width / 15 + 'px';
    },
    changeScreen() { // 改变窗口大小时,修改html字体大小;
      let docEl = document.documentElement;
      let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      let recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (clientWidth > 750) return;
        if (clientWidth === undefined) return;
        docEl.style.fontSize = 50 * (clientWidth / 750) + 'px';
      };

      if (document.addEventListener === undefined) return;
      window.addEventListener(resizeEvt, recalc, false);
      document.addEventListener(resizeEvt, recalc, false);
    }
  }
});

