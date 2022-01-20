/*
 * @Author: wdy
 * @Date: 2022-01-17 10:19:17
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 13:45:01
 */
import {zgyxRequest} from '@src/utils/index';
/**
 * 登录
 * @param data
 * @returns
 */
const apiPostAuthLogin = data => {
  return zgyxRequest({method: 'post', url: '/api/auth/login', data});
};

const apiGetAuthMenuTree = () => {
  return zgyxRequest({method: 'get', url: '/api/auth/menu/tree'});
};

export {apiPostAuthLogin, apiGetAuthMenuTree};
