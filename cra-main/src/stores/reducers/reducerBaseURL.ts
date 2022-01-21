/*
 * @Author: wdy
 * @Date: 2019-04-01 11:01:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 13:54:51
 * @des 所有的Reducer定义
 */
// types
// config
import * as types from '../mutationTypes';
// api
// util
// store
// component
const protocol = window.location.protocol;
const host = process.env.NODE_ENV === 'production' ? window.location.host : `${process.env.REACT_APP_HOST}`;

const BASE_URL = `${protocol}//${host}`; // baseUrl
const BASE_WEBSOCKET_URL = `ws://${host}`;

interface TypeActionBaseHostURL {
  type: string;
  data: string;
}
interface TypeActionBaseURL extends TypeActionBaseHostURL {}

interface TypeActionWebsocketURL extends TypeActionBaseHostURL {}

const baseHostURL = (state: string = host, action: TypeActionBaseHostURL): string => {
  switch (action.type) {
    case types.SET_BASE_HOST_URL: {
      return action.data;
    }
    default:
      return state;
  }
};

const baseURL = (state: string = BASE_URL, action: TypeActionBaseURL): string => {
  switch (action.type) {
    case types.SET_BASE_URL: {
      return action.data;
    }
    default:
      return state;
  }
};

const baseWebsocketURL = (state: string = BASE_WEBSOCKET_URL, action: TypeActionWebsocketURL): string => {
  switch (action.type) {
    case types.SET_BASE_WEBSOCKET_URL: {
      return action.data;
    }
    default:
      return state;
  }
};

export { baseHostURL, baseURL, baseWebsocketURL };
