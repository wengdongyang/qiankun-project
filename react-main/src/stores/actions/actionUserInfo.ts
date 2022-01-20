/*
 * @Author: wdy
 * @Date: 2022-01-20 10:03:18
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 10:04:46
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
 * 用户信息
 * @param userInfo
 */
const setUserInfo = (userInfo: TypeUserInfo) => ({type: types.SET_USER_INFO, data: userInfo});

export {setUserInfo};
