/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 17:51:30
 */
import styles from './HomeComponent.module.less';
import React, { FunctionComponent } from 'react';
// types
import type { Props } from './Home.d';
// config
// api
// util
// store
// component
const HomeComponent: FunctionComponent<Props> = (props) => {
  return <section className={styles['container']}>HomeComponent</section>;
};

export default HomeComponent;
