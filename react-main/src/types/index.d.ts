/*
 * @Author: wdy
 * @Date: 2022-01-18 18:23:29
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 10:12:13
 */
import type {RouteComponentProps} from 'react-router-dom';

import type {TypeHsRoute} from './route.d';
import type {TypeAseitResponse} from './response.d';
import type {TypeUserInfo} from './userInfo.d';
import type {TypeStore} from './store';

interface TypePageProps extends TypeHsRoute, RouteComponentProps, TypeStore {}
export type {TypeHsRoute, TypeAseitResponse, TypeUserInfo, TypeStore, TypePageProps};
