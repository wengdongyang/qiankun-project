/*
 * @Author: wdy
 * @Date: 2019-12-03 13:36:20
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:09:15
 */
// types
import type { TypeMenu } from '../../types';
import * as types from '../mutationTypes';

interface TypeActionMenus {
  type: string;
  data: TypeMenu[];
}
/**
 * 雾端地址
 * @param baseFogURL
 */
const setMenus = (menus: TypeMenu[]): TypeActionMenus => ({
  type: types.SET_MENUS,
  data: menus
});

export { setMenus };
