/*
 * @Author: wdy
 * @Date: 2022-01-18 18:16:02
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 13:38:14
 */
import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ReactDOM.render(<App />, document.getElementById('root'));
// reportWebVitals();

type TypeGlobalProps = Partial<{
  container: HTMLDivElement;
}>;
export const render = (props: TypeGlobalProps) => {
  const {container} = props;
  ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
  reportWebVitals();
};

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
export const bootstrap = () => {
  console.log('[react16] react app bootstraped');
};
export const mount = (props: TypeGlobalProps) => {
  render(props);
};
export const unmount = (props: TypeGlobalProps) => {
  const {container} = props;
  // @ts-ignore
  container ? ReactDOM.unmountComponentAtNode(container.querySelector('#root')) : ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
};
