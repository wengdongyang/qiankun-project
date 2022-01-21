/*
 * @Author: wdy
 * @Date: 2021-01-07 13:44:48
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:08:51
 */
import { combineReducers } from 'redux';
import { baseURL, baseWebsocketURL } from './reducerBaseURL';
import { menus } from './reducerMenu';
export default combineReducers({
  menus,
  baseURL,
  baseWebsocketURL
});
