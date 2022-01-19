/*
 * @Author: wdy
 * @Date: 2022-01-18 18:23:24
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:09:02
 */
import type {RouteProps, RouteComponentProps} from 'react-router-dom';
interface TypeHsRoute extends RouteProps {
  name?: string;
  routes?: TypeHsRoute[];
}

interface TypeHsRouteComponentProps extends TypeHsRoute, RouteComponentProps {}
export type {TypeHsRoute, TypeHsRouteComponentProps};
