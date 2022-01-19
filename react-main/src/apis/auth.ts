/*
 * @Author: wdy
 * @Date: 2022-01-19 11:48:17
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 12:01:21
 */
// apis
// hooks
// utils
import {zgyxRequest} from '@src/utils';
// types
// stores
// configs
// components

const apiAuthLogin = (data: any) => {
  return zgyxRequest({method: 'post', url: '/api/auth/login', data});
};

const apiAuthMenuTree = () => {
  return zgyxRequest({method: 'get', url: 'api/auth/menu/tree'});
};

export {apiAuthLogin, apiAuthMenuTree};
