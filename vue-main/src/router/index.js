/*
 * @Author: wdy
 * @Date: 2022-01-14 17:03:01
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 10:45:59
 */
import Vue from 'vue';
import Router from 'vue-router';

import routes from './routers';
Vue.use(Router);
const router = new Router({mode: 'history', routes});

router.beforeEach((to, from, next) => {
  // if (!token) {
  //   next({ path: "/login" });
  // } else {
  //   // 此处做权限拦截
  //   next();
  // }
  next();
});

router.afterEach(to => {
  window.scrollTo(0, 0);
});

export default router;
