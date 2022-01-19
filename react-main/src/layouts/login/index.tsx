/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:09:27
 */
import React, {Fragment} from 'react';
// apis
// hooks
// utils
// types
import type {TypeHsRouteComponentProps} from '@src/types';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
import LoginComponent from './LoginComponent';
interface Props extends TypeHsRouteComponentProps {}
const login: FunctionComponent<Props> = props => {
  return <LoginComponent {...props} />;
};
export default login;
