/*
 * @Author: wdy
 * @Date: 2022-01-19 11:48:17
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 09:39:21
 */
// apis
// hooks
// utils
import {zgyxRequest} from '@src/utils';
// types
// stores
// configs
// components
type TypeApiPostAuthLoginData = Partial<{username: string; password: string}>;
const apiPostAuthLogin = (data: TypeApiPostAuthLoginData): Promise<any> => {
  return zgyxRequest({method: 'post', url: '/api/auth/login', data});
};

const apiGetAuthMenuTree = (): Promise<any> => {
  return zgyxRequest({method: 'get', url: '/api/auth/menu/tree'});
};

export {apiPostAuthLogin, apiGetAuthMenuTree};
export type {TypeApiPostAuthLoginData};
