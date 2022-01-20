/*
 * @Author: wdy
 * @Date: 2022-01-18 18:08:57
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 18:04:01
 */
import 'minireset.css/minireset.css';
import React from 'react';
import {Provider} from 'react-redux';
import {registerMicroApps, start} from 'qiankun';
import {BrowserRouter, Switch} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
// apis
// hooks
// utils
// types
// stores
import {store, persistor} from './stores/index';
// configs
import routes from './routes';
// components
import {HsdRoute} from '@src/components';
registerMicroApps([
  {name: 'vue-micro', entry: 'http://localhost:8888/', container: '#qiankunContainer', activeRule: '/root/qiankunVue'},
  {name: 'react-micro', entry: 'http://localhost:3333/', container: '#qiankunContainer', activeRule: '/root/qiankunReact'},
]);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, index) => (
              <HsdRoute key={index} {...route} />
            ))}
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
