/*
 * @Author: wdy
 * @Date: 2020-08-03 11:40:00
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:39:47
 */
import type { TypeBaseProps, TypeAseitResponse, TypeUserInfo } from '@src/types';
interface Props extends TypeBaseProps {
  setUserInfo: (userInfo: TypeUserInfo) => void;
}

export type { TypeAseitResponse, Props };
