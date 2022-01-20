/*
 * @Author: wdy
 * @Date: 2022-01-14 18:04:56
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 15:21:49
 */
import Login from '@src/layouts/login';
import Root from '@src/layouts/root';

import Page404 from '@src/layouts/page404';
import EmptyLayout from '@src/layouts/emptyLayout';

import Qiankun from '@src/pages/qiankun';

export default [
  {
    path: '/',
    name: '/',
    redirect: '/login',
    component: Login,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/root',
    name: 'root',
    redirect: '/root/base',
    component: Root,
    children: [
      {
        path: 'base',
        name: 'base',
        redirect: '/root/base/home',
        component: EmptyLayout,
        children: [
          {
            path: 'home',
            name: 'home',
            meta: {title: '首页'},
            component: () => import('@src/pages/base/home'),
          },
        ],
      },
      {
        path: 'qiankun',
        meta: {title: 'qiankun'},
        component: Qiankun,
      },
      {
        path: '*',
        meta: {title: '404'},
        component: Page404,
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
