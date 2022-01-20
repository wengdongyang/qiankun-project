/*
 * @Author: wdy
 * @Date: 2019-04-01 11:01:00
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 10:03:47
 * @des 所有的userReducer定义
 */
// apis
// hooks
// utils
// types
import type {TypeUserInfo} from '@src/types/index';
// stores
// configs
import * as types from '../mutationTypes';
// components

/**
 * 设置userInfo
 * @param state
 * @param action
 */
const userInfo = (state: TypeUserInfo = {}, action: {type: string; data: TypeUserInfo}): TypeUserInfo => {
  return action.type === types.SET_USER_INFO ? action.data : state;
};

export {userInfo};
