/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 14:12:49
 */
import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
// types
import type { Dispatch } from 'redux';
import type { TypeStore } from '../../types';
import type { Props } from './Root';
// config
// api
// util
// store
import { setBaseURL, setBaseWebsocketURL } from '../../stores/actions';
// component
import RootComponent from './RootComponent';
const Root: FunctionComponent<Props> = (props) => <RootComponent {...props} />;
const mapStateToProps = (state: TypeStore) => ({
  ...state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBaseURL: (baseURL: string) => {
    dispatch(setBaseURL(baseURL));
  },
  setBaseWebsocketURL: (baseWebsocketURL: string) => {
    dispatch(setBaseWebsocketURL(baseWebsocketURL));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
