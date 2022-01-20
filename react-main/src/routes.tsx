/*
 * @Author: wdy
 * @Date: 2022-01-18 18:25:03
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 11:14:06
 */
import React, {lazy} from 'react';
import {Redirect} from 'react-router-dom';
// apis
// utils
// types
import type {TypeHsRoute} from './types';
// stores
// configs
// components
import Login from '@src/layouts/login';
import Root from '@src/layouts/root';

import Qiankun from './pages/qiankun';

import baseRoutes from './pages/base/routes';

const routes: TypeHsRoute[] = [
  {path: '/', exact: true, render: props => <Redirect {...props} to={'/login'} />},
  {path: '/login', exact: true, component: Login},
  {
    path: '/root',
    exact: false,
    component: Root,
    routes: baseRoutes.concat([{path: ['/root/qiankunVue', '/root/qiankunReact'], exact: false, component: Qiankun}]),
  },
];

export default routes;
