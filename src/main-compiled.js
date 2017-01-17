'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Goods = require('components/goods/Goods.vue');

var _Goods2 = _interopRequireDefault(_Goods);

var _Sellers = require('components/sellers/Sellers.vue');

var _Sellers2 = _interopRequireDefault(_Sellers);

var _Ratings = require('components/ratings/Ratings.vue');

var _Ratings2 = _interopRequireDefault(_Ratings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-new */
_vue2.default.use(_vueRouter2.default); // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_vue2.default.use(_vueResource2.default);

var routes = [{ path: '/', redirect: '/goods' }, { path: '/goods', component: _Goods2.default }, { path: '/ratings', component: _Ratings2.default }, { path: '/sellers', component: _Sellers2.default }];

var router = new _vueRouter2.default({
  routes: routes,
  linkActiveClass: 'active' // 全局配置选中路由时的样式
});

new _vue2.default({
  router: router,
  el: '#app',
  template: '<App/>',
  components: { App: _App2.default },
  created: function created() {
    // 设置 html font-size
    this.setFontSize();
    this.changeScreen();
  },

  methods: {
    setFontSize: function setFontSize() {
      // 设置html字体大小
      var oHtml = document.querySelector('html');
      var rect = oHtml.getBoundingClientRect();
      var width = rect.width;
      oHtml.style.fontSize = width / 15 + 'px';
    },
    changeScreen: function changeScreen() {
      // 改变窗口大小时,修改html字体大小;
      var docEl = document.documentElement;
      var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      var recalc = function recalc() {
        var clientWidth = docEl.clientWidth;
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

//# sourceMappingURL=main-compiled.js.map