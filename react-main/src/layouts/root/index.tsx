import React from 'react';
import {connect} from 'react-redux';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// apis
// hooks
// utils
// types
import type {Dispatch} from 'redux';
import type {FunctionComponent} from 'react';
import type {TypeStore, TypePageProps} from '@src/types';
// stores
// configs
// components
import RootComponent from './RootComponent';
interface Props extends TypePageProps {}
const Root: FunctionComponent<Props> = props => {
  return (
    <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
      <RootComponent {...props} />
    </ConfigProvider>
  );
};
const mapStateToProps = (state: TypeStore) => ({...state});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
