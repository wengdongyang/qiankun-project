/*
 * @Author: wdy
 * @Date: 2022-01-18 18:08:57
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 11:38:39
 */
import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
// apis
// hooks
// utils
// types
// stores
// configs
// components
import {HsdRoute} from '@src/components';

import CameraEquipments from '@src/pages/base/cameraEquipments';
import SensingDeviceEquipments from '@src/pages/base/sensingDeviceEquipments';
const App = () => {
  return (
    <HashRouter basename={window.__POWERED_BY_QIANKUN__ ? '/root/qiankunReact' : '/'}>
      <Switch>
        <Route path={'/cameraEquipments'} component={CameraEquipments} />
        <Route path={'/sensingDeviceEquipments'} component={SensingDeviceEquipments} />
      </Switch>
    </HashRouter>
  );
};

export default App;
