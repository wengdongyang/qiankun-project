/*
 * @Author: wdy
 * @Date: 2020-08-03 11:40:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:15:27
 */
import type { TypeBaseProps, TypeMenu } from '../../types';

interface Props extends TypeBaseProps {
  setBaseURL: (baseURL: string) => void;
  setBaseWebsocketURL: (baseWebsocketURL: string) => void;
  setMenus: (menus: TypeMenu[]) => void;
}

export type { TypeBaseProps, Props, TypeMenu };
