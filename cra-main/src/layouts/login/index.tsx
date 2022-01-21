/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:14:17
 */
import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
// types
import type { Dispatch } from 'redux';
import type { TypeMenu, TypeStore } from '../../types';
import type { Props } from './Login.d';
// config
// api
// util
// store
import { setMenus, setBaseURL, setBaseWebsocketURL } from '../../stores/actions';
// component
import LoginComponent from './LoginComponent';
const Login: FunctionComponent<Props> = (props) => <LoginComponent {...props} />;
const mapStateToProps = (state: TypeStore) => ({
  ...state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBaseURL: (baseURL: string) => {
    dispatch(setBaseURL(baseURL));
  },
  setBaseWebsocketURL: (baseWebsocketURL: string) => {
    dispatch(setBaseWebsocketURL(baseWebsocketURL));
  },
  setMenus: (menus: TypeMenu[]) => {
    dispatch(setMenus(menus));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
