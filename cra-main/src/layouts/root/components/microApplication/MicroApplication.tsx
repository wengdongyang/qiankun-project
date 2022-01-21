/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:30:39
 */
import React from 'react';
import { connect } from 'react-redux';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
// types
import type { Dispatch } from 'redux';
import type { FunctionComponent } from 'react';
import type { TypeStore } from '@src/types';
import type { TypeBaseProps } from '../../types';
// api
// util
// store
// config
// component

import { microAppConfigs } from '../../configs';

interface Props extends TypeBaseProps {}

const MicroApplication: FunctionComponent<Props> = (props) => {
  const globalState = {};
  const actionRef = initGlobalState(globalState);
  actionRef.onGlobalStateChange((state: TypeStore, prev: TypeStore) => {
    console.error('onGlobalStateChange', state);
  });
  const microApps = microAppConfigs.map((microApp) => ({ ...microApp, props: { ...globalState } }));
  const lifeCycles = {};
  registerMicroApps(microApps, lifeCycles);
  start();

  return <section id={'microApplication'}>microApplication</section>;
};
const mapStateToProps = (state: TypeStore) => ({
  ...state
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MicroApplication);
