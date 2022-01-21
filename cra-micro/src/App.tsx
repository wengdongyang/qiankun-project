/*
 * @Author: wdy
 * @Date: 2021-01-07 14:13:31
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-08 11:02:25
 */
import 'minireset.css/minireset.css';
import './styles/reset/index.less';
import './styles/themes/index.less';

import React from 'react';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import zhCN from 'antd/lib/locale/zh_CN';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { store, persistor } from './stores';
import PageA from './pages/pageA';
import PageB from './pages/pageB';

import Page404 from './layouts/page404';
// @ts-ignore
const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={zhCN}>
          {/* @ts-ignore */}
          <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/root/asInspection' : '/'}>
            <Switch>
              <Route path={`/`} exact render={() => <Redirect to={'/page404'} />} />
              <Route path={'/pageA'} exact children={<PageA {...props} />} />
              <Route path={'/pageB'} children={<PageB {...props} />} />
              <Route path={'/inspections'} children={<PageA {...props} />} />
              <Route path={'/page404'} component={Page404} />
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
