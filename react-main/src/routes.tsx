/*
 * @Author: wdy
 * @Date: 2022-01-18 18:25:03
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 18:25:47
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

const routes: TypeHsRoute[] = [
  {path: '/', exact: true, render: props => <Redirect {...props} to={'/login'} />},
  {path: '/login', exact: true, component: Login},
  {path: ['/root', '/root/base'], exact: false, component: Root},
];

export default routes;
