/*
 * @Author: wdy
 * @Date: 2020-12-07 10:56:29
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:11:49
 */
import type { TypeMenu } from './menu.d';
interface TypeStore {
  baseHostURL: string; // host
  baseURL: string; // 云端
  baseWebsocketURL: string; // websocket
  menus: TypeMenu[]; // 菜单
}
export type { TypeStore };
