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
import type {TypePageProps, TypeStore} from '@src/types';
// stores
// configs
// components
import LoginComponent from './LoginComponent';
interface Props extends TypePageProps {}
const login: FunctionComponent<Props> = props => {
  return (
    <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
      <LoginComponent {...props} />
    </ConfigProvider>
  );
};

const mapStateToProps = (state: TypeStore) => ({...state});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(login);
