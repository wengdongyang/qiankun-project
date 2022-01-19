/*
 * @Author: wdy
 * @Date: 2022-01-17 10:19:17
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 18:10:23
 */
import {zgyxRequest} from '@src/utils/index';
/**
 * 登录
 * @param data
 * @returns
 */
const apiPostAuthLogin = data => {
  console.info('apiPostAuthLogin', data);
  return zgyxRequest({method: 'post', url: '/api/auth/login', data});
};

const apiGetAuthMenuTree = () => {
  return zgyxRequest({method: 'get', url: '/api/auth/menu/tree'});
};

export {apiPostAuthLogin, apiGetAuthMenuTree};
