/*
 * @Author: wdy
 * @Date: 2021-01-07 11:44:21
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-08 11:01:21
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import type { TypeStore } from './types';

import { store } from './stores';
import defaultProps from './defaultProps';
import { setBaseURL, setBaseWebsocketURL } from './stores/actions';

declare type OnGlobalStateChangeCallback = (next: TypeStore, prev: TypeStore) => void;

interface Props extends TypeStore {
  container?: any;
  onGlobalStateChange?: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void;
  setGlobalState?: any;
}
/**
 * 修改store
 * @param props
 */
const initStore = (props: TypeStore) => {
  const { baseHostURL = '', baseURL = '', baseWebsocketURL = '' } = props;
  store.dispatch(setBaseURL(baseURL));
  store.dispatch(setBaseWebsocketURL(baseWebsocketURL));
};

const render = (props: Props) => {
  try {
    const { container, setGlobalState } = props;
    console.error(props);
    ReactDOM.render(<App setGlobalState={setGlobalState} />, container ? container.querySelector('#micro-root') : document.querySelector('#micro-root'));
  } catch (error) {}
};
// @ts-ignore
if (!window['__POWERED_BY_QIANKUN__']) {
  try {
    initStore(defaultProps);
    render({});
  } catch (error) {}
}

const bootstrap = async () => {
  try {
    console.log('[react16] react app bootstraped');
  } catch (error) {}
};

const mount = async (props: Props) => {
  try {
    console.log('[react16] props from main framework', props);
    props?.onGlobalStateChange &&
      props.onGlobalStateChange((next: TypeStore, prev: TypeStore) => {
        initStore(next);
      });
    render(props);
  } catch (error) {}
};

// @ts-ignore
const unmount = async (props) => {
  try {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#micro-root') : document.querySelector('#micro-root'));
  } catch (error) {}
};

export { bootstrap, mount, unmount };

reportWebVitals();
