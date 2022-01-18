/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 18:23:58
 */
import React, {Fragment} from 'react';
// apis
// hooks
// utils
// types
import type {FunctionComponent} from 'react';
import type {TypeHsRoute} from '@src/types';
// stores
// configs
// components
import RootComponent from './RootComponent';
interface Props extends TypeHsRoute {}
const Root: FunctionComponent<Props> = props => {
  return <RootComponent {...props} />;
};
export default Root;
