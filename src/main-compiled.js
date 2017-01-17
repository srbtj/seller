'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

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
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_vueRouter2.default);

var routes = [{ path: '/', redirect: '/goods' }, { path: '/goods', component: _Goods2.default }, { path: '/ratings', component: _Ratings2.default }, { path: '/sellers', component: _Sellers2.default }];

var router = new _vueRouter2.default({
  routes: routes,
  linkActiveClass: 'active' // 全局配置选中路由时的样式
});

new _vue2.default({
  router: router,
  el: '#app',
  template: '<App/>',
  components: { App: _App2.default }
});

//# sourceMappingURL=main-compiled.js.map