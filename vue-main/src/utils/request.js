/*
 * @Author: wdy
 * @Date: 2019-05-05 17:11:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-17 10:30:45
 */
import qs from 'qs';
import axios from 'axios';
import {message} from 'ant-design-vue';
// apis
// utils
// types
// stores
// configs
// components

const otherRequests = new Map(); // 其它所有请求只能一次

let timeoutAxiosRef; // 普通请求 禁止多次请求 ref

// 请求拦截器
axios.interceptors.request.use(
  config => {
    const {method = '', baseURL, url = '', params = {}, data = {}} = config;
    const requestParams = qs.stringify({method, baseURL, url, params, data});

    if (['post', 'delete', 'put', 'POST', 'DELETE', 'PUT'].includes(method)) {
      if (otherRequests.has(requestParams)) {
        message.error(`请求已经存在${requestParams}`);
        return Promise.reject();
      }
      otherRequests.set(requestParams, true);
      if (timeoutAxiosRef) {
        clearTimeout(timeoutAxiosRef);
        timeoutAxiosRef = null;
      }
      timeoutAxiosRef = setTimeout(() => {
        otherRequests.clear();
      }, 5 * 1000);
    }
    return Promise.resolve(Object.assign(config, {withCredentials: true}));
  },
  error => {
    return Promise.reject(error);
  }
);
// 请求完成后的拦截器
axios.interceptors.response.use(
  response => {
    console.info(response);
    const {config} = response;
    const {method = '', baseURL, url, params = {}, data = {}} = config;
    const requestParams = qs.stringify({method, baseURL, url, params, data});
    if (otherRequests.has(requestParams)) {
      otherRequests.delete(requestParams);
    }
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message.error({content: '登录失效，请重新登陆!'});
          break;
        default:
          break;
      }
    }
    // 所有的计数器
    otherRequests.clear();
    return Promise.reject(error);
  }
);
/**
 * 请求主体函数
 * @param {*} opts
 * @returns
 */
const zgyxRequest = opts => {
  const token = sessionStorage.getItem('token');

  const {headers: optHeaders = {}, ...otherOpts} = opts;
  const headers = Object.assign({}, token ? {headers: Object.assign({}, optHeaders || {}, {Authorization: `Bearer ${token}`})} : {...optHeaders});
  const httpOpts = Object.assign({}, headers, otherOpts);
  return new Promise((resolve, reject) => {
    axios(httpOpts)
      .then(res => {
        const {data} = res;
        resolve(data);
      })
      .catch(response => {
        reject(response);
      });
  });
};
export {axios};
export default zgyxRequest;
