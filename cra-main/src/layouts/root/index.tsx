/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:24:04
 */
import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
// types
import type { Dispatch } from 'redux';
import type { TypeStore } from '@src/types';
import type { Props } from './types.d';
// config
// api
// util
// store
// component
import RootComponent from './RootComponent';
const Root: FunctionComponent<Props> = (props) => <RootComponent {...props} />;
const mapStateToProps = (state: TypeStore) => ({
  ...state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
