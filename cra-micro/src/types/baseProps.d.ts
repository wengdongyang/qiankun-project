/*
 * @Author: wdy
 * @Date: 2020-05-21 17:05:42
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:11:42
 */
import type { RouterProps } from 'react-router';
import type { TypeMenu } from './menu.d';
interface TypeBaseProps extends RouterProps {
  baseHostURL: string; // host
  baseURL: string; // 云端
  baseWebsocketURL: string; // websocket

  menus: TypeMenu[];
}
export { TypeBaseProps };
