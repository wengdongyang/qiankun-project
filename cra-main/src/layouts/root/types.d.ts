/*
 * @Author: wdy
 * @Date: 2020-08-03 11:40:00
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:34:58
 */
import type { TypeBaseProps } from '../../types';

interface Props extends TypeBaseProps {}
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
export type { TypeBaseProps, Props, TypeMicroApp };
