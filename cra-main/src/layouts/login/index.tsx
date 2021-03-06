/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:38:59
 */
import React from 'react';
import { connect } from 'react-redux';
// types
import type { Dispatch } from 'redux';
import type { FunctionComponent } from 'react';
import type { TypeStore, TypeUserInfo } from '@src/types';
import type { Props } from './types';
// config
// api
// util
// store
import { setUserInfo } from '@src/stores/actions';
// component
import LoginComponent from './LoginComponent';
const Login: FunctionComponent<Props> = (props) => <LoginComponent {...props} />;
const mapStateToProps = (state: TypeStore) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUserInfo: (userInfo: TypeUserInfo) => dispatch(setUserInfo(userInfo))
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
