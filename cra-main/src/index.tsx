/*
 * @Author: wdy
 * @Date: 2021-01-07 11:44:21
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:11:52
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  require('@src/mock');
}

ReactDOM.render(<App />, document.getElementById('react-main-root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
