/*
 * @Author: wdy
 * @Date: 2021-01-07 14:13:31
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 10:48:06
 */
import 'minireset.css/minireset.css';
import 'antd/dist/antd.css';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { store, persistor } from './stores';
import Login from './layouts/login';
import Root from './layouts/root';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path={`/`} exact render={() => <Redirect to="/login" />} />
            <Route path={'/login'} exact component={Login} />
            <Route path={'/root'} component={Root} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
