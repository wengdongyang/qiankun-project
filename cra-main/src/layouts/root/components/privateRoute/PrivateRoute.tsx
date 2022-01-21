/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: wdy
 * @Last Modified time: 2020-12-28 17:00:53
 */

import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import type { RouteProps } from 'react-router-dom';

interface Props extends RouteProps {}
const PrivateRoute: FunctionComponent<Props> = ({ children, component, ...other }) => {
  return <Route {...other} render={({ history, location, match }) => children} />;
};

export default PrivateRoute;
