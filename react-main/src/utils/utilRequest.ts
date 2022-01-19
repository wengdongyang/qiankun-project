/*
 * @Author: wdy
 * @Date: 2019-05-05 17:11:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:46:44
 */
import qs from 'qs';
import axios from 'axios';
import {message} from 'antd';
// apis
// utils
// types
import type {AxiosRequestConfig, AxiosResponse} from 'axios';
// stores
// configs
// components
const otherRequests = new Map(); // 其它所有请求只能一次
// 请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const {method = '', baseURL, url = '', params = {}, data = {}} = config;
    const requestParams = qs.stringify({method, baseURL, url, params, data});

    if (['post', 'delete', 'put', 'POST', 'DELETE', 'PUT'].includes(method)) {
      if (otherRequests.has(requestParams)) {
        message.error(`请求已经存在${requestParams}`);
        return Promise.reject();
      }
      otherRequests.set(requestParams, true);
    }
    return Promise.resolve(Object.assign(config, {withCredentials: true}));
  },
  error => {
    return Promise.reject(error);
  },
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
    // 清空loading操作
    return Promise.reject(error);
  },
);
/**
 * ajax通用接口
 * @param {*} opts
 */

const zgyxRequest = (opts: AxiosRequestConfig): Promise<any> => {
  const {headers: optHeaders = {}, ...otherOpts} = opts;
  const headers = Object.assign({}, optHeaders);
  const httpOpts: AxiosRequestConfig = Object.assign({}, headers, otherOpts);
  return new Promise((resolve, reject) => {
    axios(httpOpts)
      .then((res: AxiosResponse) => {
        const {data} = res;
        resolve(data);
      })
      .catch((response: any) => {
        reject(response);
      });
  });
};
export {axios};
export default zgyxRequest;
