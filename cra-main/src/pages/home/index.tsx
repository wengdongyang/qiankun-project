/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2020-12-07 11:41:52
 */
import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
// types
import type { Dispatch } from 'redux';
import type { TypeStore } from '../../types';
import type { Props } from './Home';
// types
// config
// api
// util
// store
// component
import HomeComponent from './HomeComponent';
const Home: FunctionComponent<Props> = (props) => <HomeComponent {...props} />;
const mapStateToProps = (state: TypeStore) => ({
  ...state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
