/*
 * @Author: wdy
 * @Date: 2022-01-18 18:15:38
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:59:23
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  require('@src/mock');
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
