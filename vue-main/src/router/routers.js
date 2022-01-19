/*
 * @Author: wdy
 * @Date: 2022-01-14 18:04:56
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 17:32:30
 */
import Login from '@src/layouts/login';
import Root from '@src/layouts/root';

import Qiankun from '@src/pages/qiankun';

export default [
  {
    path: '/',
    name: '/',
    redirect: '/login',
    meta: {title: 'login'},
    component: Login,
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: 'Login - 登录'},
    component: Login,
  },
  {
    path: '/root',
    name: 'root',
    redirect: '/root/home',
    meta: {title: 'root'},
    component: Root,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: {title: '首页'},
        component: () => import('@src/pages/base/home'),
      },
      {
        path: '*',
        meta: {title: 'qiankun'},
        component: Qiankun,
      },
    ],
  },
  // {
  //   path: '/qiankun',
  //   name: 'qiankun',
  //   meta: {title: '首页'},
  //   component: Root,
  //   children: [{path: '*', component: () => import('@src/views/qiankun')}],
  // },
];
