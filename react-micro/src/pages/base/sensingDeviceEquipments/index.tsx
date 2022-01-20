import React from 'react';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// apis
// hooks
// utils
// types
import type {FunctionComponent} from 'react';
// stores
// configs
// components
const SensingDeviceEquipments: FunctionComponent<{}> = props => (
  <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
    <div>SensingDeviceEquipments</div>
  </ConfigProvider>
);
export default SensingDeviceEquipments;
