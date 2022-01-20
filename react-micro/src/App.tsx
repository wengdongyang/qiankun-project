/*
 * @Author: wdy
 * @Date: 2022-01-18 18:08:57
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 15:51:59
 */
import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
// apis
// hooks
// utils
// types
// stores
// configs
// components
import Test from '@src/pages/base/test';
const App = () => {
  return (
    <HashRouter basename={window.__POWERED_BY_QIANKUN__ ? '/root/qiankunReact' : '/'}>
      <Switch>
        <Route path={'/'} exact render={props => <Redirect {...props} to={'/test'} />} />
        <Route path={'/test'} exact component={Test} />
      </Switch>
    </HashRouter>
  );
};

export default App;
