/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 18:24:03
 */
import React, {Fragment} from 'react';
// apis
// hooks
// utils
// types
import type {TypeHsRoute} from '@src/types';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
interface Props extends TypeHsRoute {}
const RootComponent: FunctionComponent<Props> = props => {
  return <section>root</section>;
};
export default RootComponent;
