import React from 'react';
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
