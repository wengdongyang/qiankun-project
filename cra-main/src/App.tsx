/*
 * @Author: wdy
 * @Date: 2021-01-07 14:13:31
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 14:15:21
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
import Login from './layouts/login';
import Root from './layouts/root';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider locale={zhCN}>
          <BrowserRouter>
            <Switch>
              <Route path={`/`} exact render={() => <Redirect to="/login" />} />
              <Route path={'/login'} exact component={Login} />
              <Route path={'/root'} component={Root} />
            </Switch>
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
