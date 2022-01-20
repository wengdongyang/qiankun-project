import styles from './HomeComponent.module.less';
import React from 'react';
import {useRequest} from 'ahooks';
import {Form, Input, Button} from 'antd';
// apis
// hooks
// utils
// types
import type {FunctionComponent} from 'react';
import type {TypePageProps, TypeAseitResponse} from '@src/types';
// stores
// configs
// components
interface InnerProps extends TypePageProps {}
const HomeComponent: FunctionComponent<InnerProps> = props => {
  return <section className={styles['container']}>HomeComponent</section>;
};
export default HomeComponent;
