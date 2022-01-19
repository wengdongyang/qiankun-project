/*
 * @Author: wdy
 * @Date: 2022-01-18 18:08:57
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 14:13:17
 */
import 'minireset.css/minireset.css';
import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
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
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <HsdRoute key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
