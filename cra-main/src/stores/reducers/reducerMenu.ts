/*
 * @Author: wdy
 * @Date: 2019-04-01 11:01:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:08:26
 * @des 所有的Reducer定义
 */
// types
import type { TypeMenu } from '../../types';
// config
import * as types from '../mutationTypes';
// api
// util
// store
// component
interface TypeActionMenus {
  type: string;
  data: TypeMenu[];
}

const menus = (state: TypeMenu[] = [], action: TypeActionMenus): TypeMenu[] => {
  switch (action.type) {
    case types.SET_MENUS: {
      return action.data;
    }
    default:
      return state;
  }
};

export { menus };
