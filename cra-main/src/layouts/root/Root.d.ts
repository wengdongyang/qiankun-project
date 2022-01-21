/*
 * @Author: wdy
 * @Date: 2020-08-03 11:40:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 17:03:50
 */
import type { TypeBaseProps, TypeMenu } from '../../types';

interface Props extends TypeBaseProps {
  setBaseURL: (baseURL: string) => void;
  setBaseWebsocketURL: (baseWebsocketURL: string) => void;
}
/**
 * app 定义
 */
interface TypeMicroApp {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  props?: TypeBaseProps;
}
export type { TypeBaseProps, Props, TypeMenu, TypeMicroApp };
