/*
 * @Author: wdy
 * @Date: 2022-01-18 18:25:03
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 10:38:43
 */
import React, {lazy} from 'react';
import {Redirect} from 'react-router-dom';
// apis
// utils
// types
import type {TypeHsRoute} from '@src/types';
// stores
// configs
// components

const routes: TypeHsRoute[] = [
  {path: '/root/base', exact: true, render: props => <Redirect {...props} to={'/root/base/employeeConfigs'} />},
  {path: '/root/base/employeeConfigs', exact: true, component: lazy(() => import('./employeeConfigs'))},
  {path: '/root/base/employeeServerPermissions', exact: true, component: lazy(() => import('./employeeServerPermissions'))},
  {path: '/root/base/home', exact: true, component: lazy(() => import('./home'))},
  {path: '/root/base/homeSetting', exact: true, component: lazy(() => import('./homeSetting'))},
  {path: '/root/base/menuConfigs', exact: true, component: lazy(() => import('./menuConfigs'))},
  {path: '/root/base/roleMenuConfigs', exact: true, component: lazy(() => import('./roleMenuConfigs'))},
];

export default routes;
