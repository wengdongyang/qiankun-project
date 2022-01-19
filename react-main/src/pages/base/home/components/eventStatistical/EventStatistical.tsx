import styles from './EventStatistical.module.less';import React, {useState, useEffect, useMemo, Fragment} from 'react';import {useRequest, useMount, useSafeState} from 'ahooks';import {Row, Col, Modal, message} from 'antd';
// apis
// hooks
// utils
// types
import type {Props, TypeAseitResponse} from '../../types.d';import type {FunctionComponent} from 'react';
// stores
// configs
// components
interface InnerProps extends Props {}
const EventStatistical: FunctionComponent<InnerProps> = props => {
  return <section className={styles['container']}>EventStatistical</section>;
}
export default EventStatistical;
