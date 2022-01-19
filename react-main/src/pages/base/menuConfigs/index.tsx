import React from 'react'; import zhCN from 'antd/lib/locale/zh_CN'; import {ConfigProvider} from 'antd';
// apis
// hooks
// utils
// types
import type {Props} from './types.d';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
import MenuConfigsComponent from './MenuConfigsComponent';
const MenuConfigs: FunctionComponent<Props> = props => (
  <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
    <MenuConfigsComponent {...props} />
  </ConfigProvider>
);
// const mapStateToProps = (state: TypeStore) => ({...state});
// const mapDispatchToProps = (dispatch: Dispatch) => ({});
// export default connect(mapStateToProps, mapDispatchToProps)(MenuConfigs);
export default MenuConfigs;
