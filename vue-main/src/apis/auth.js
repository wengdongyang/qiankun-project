/*
 * @Author: wdy
 * @Date: 2022-01-17 10:19:17
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-17 10:31:46
 */
import {zgyxRequest} from '@src/utils/index';
/**
 * 登录
 * @param data
 * @returns
 */
const apiAuthSessionLogin = data => {
  return zgyxRequest({method: 'post', url: '/api/auth/session/login', data});
};

export {apiAuthSessionLogin};
