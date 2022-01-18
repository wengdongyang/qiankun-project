/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 18:13:14
 */
import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
// apis
// hooks
// utils
// types
import type {FunctionComponent} from 'react';
import type {RouteProps} from 'react-router-dom';
// stores
// configs
// components

interface TypeReactRoute extends RouteProps {
  name?: string;
  routes?: TypeReactRoute[];
}
interface Props extends TypeReactRoute {}
const HsdRoute: FunctionComponent<Props> = route => {
  const {component: Component, render} = route;
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => {
        if (Component) {
          return <Component {...props} {...route} />;
        } else if (render) {
          return render(props);
        } else {
          return <Fragment />;
        }
      }}
    />
  );
};
export default HsdRoute;
