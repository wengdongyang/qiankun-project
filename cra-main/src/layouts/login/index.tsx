/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 10:41:33
 */
import { connect } from 'react-redux';
import React from 'react';
// types
import type { Dispatch } from 'redux';
import type { FunctionComponent } from 'react';
import type { TypeStore } from '@src/types';
import type { Props } from './types';
// config
// api
// util
// store
// component
import LoginComponent from './LoginComponent';
const Login: FunctionComponent<Props> = (props) => <LoginComponent {...props} />;
const mapStateToProps = (state: TypeStore) => ({ ...state });
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
