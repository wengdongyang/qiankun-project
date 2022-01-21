/*
 * @Author: wdy
 * @Date: 2019-12-03 13:36:20
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 13:57:16
 */
import * as types from '../mutationTypes';
interface TypeActionBaseURL {
  type: string;
  data: string;
}
interface TypeActionBaseWebsocketURL extends TypeActionBaseURL {}
/**
 * baseURL
 * @param baseURL
 */
const setBaseURL = (baseURL: string): TypeActionBaseURL => ({ type: types.SET_BASE_URL, data: baseURL });

/**
 * websocketURL
 * @param baseWebsocketURL
 */
const setBaseWebsocketURL = (baseWebsocketURL: string): TypeActionBaseWebsocketURL => ({ type: types.SET_BASE_WEBSOCKET_URL, data: baseWebsocketURL });

export { setBaseURL, setBaseWebsocketURL };
