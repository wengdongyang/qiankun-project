/*
 * @Author: wdy
 * @Date: 2022-01-18 18:23:24
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 10:11:14
 */
import type {RouteProps} from 'react-router-dom';

interface TypeHsRoute extends RouteProps {
  name?: string;
  routes?: TypeHsRoute[];
}

export type {TypeHsRoute};
