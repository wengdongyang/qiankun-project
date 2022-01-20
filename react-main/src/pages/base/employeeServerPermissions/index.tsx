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
import EmployeeServerPermissionsComponent from './EmployeeServerPermissionsComponent';
const EmployeeServerPermissions: FunctionComponent<TypePageProps> = props => (
  <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
    <EmployeeServerPermissionsComponent {...props} />
  </ConfigProvider>
);
const mapStateToProps = (state: TypeStore) => ({...state});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeServerPermissions);
