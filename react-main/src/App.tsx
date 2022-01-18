/*
 * @Author: wdy
 * @Date: 2022-01-18 18:08:57
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 18:27:08
 */
import 'minireset.css/minireset.css';
import React from 'react';
import {HashRouter, Switch} from 'react-router-dom';
// apis
// hooks
// utils
// types
// stores
// configs
import routes from './routes';
// components
import {HsdRoute} from '@src/components';
const App = () => {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, index) => (
          <HsdRoute key={index} {...route} />
        ))}
      </Switch>
    </HashRouter>
  );
};

export default App;
