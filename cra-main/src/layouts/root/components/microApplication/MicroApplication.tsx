/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 17:21:32
 */
import { connect } from 'react-redux';
import React, { FunctionComponent } from 'react';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
// types
import type { Dispatch } from 'redux';
import type { TypeStore } from '../../../../types';
import type { TypeBaseProps } from '../../Root';
// config
import { microAppConfigs } from '../../configs';
// api
// util
// store
import { setMenus, setBaseURL, setBaseWebsocketURL } from '../../../../stores/actions';
// component

interface Props extends TypeBaseProps {
  setBaseURL: (baseURL: string) => void;
  setBaseWebsocketURL: (baseWebsocketURL: string) => void;
}

const MicroApplication: FunctionComponent<Props> = (props) => {
  const { baseHostURL, baseURL, baseWebsocketURL } = props;

  const globalState = { baseHostURL, baseURL, baseWebsocketURL };
  const actionRef = initGlobalState(globalState);
  actionRef.onGlobalStateChange((state: TypeStore, prev: TypeStore) => {
    console.error('onGlobalStateChange', state);
    const { baseHostURL, baseURL, baseWebsocketURL, menus } = state;
    props.setBaseURL(baseURL);
    props.setBaseWebsocketURL(baseWebsocketURL);
    // console.error('666');
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
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBaseURL: (baseURL: string) => {
    dispatch(setBaseURL(baseURL));
  },
  setBaseWebsocketURL: (baseWebsocketURL: string) => {
    dispatch(setBaseWebsocketURL(baseWebsocketURL));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(MicroApplication);
