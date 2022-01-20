import styles from './QiankunComponent.module.less';
import React, {useRef} from 'react';
import {useMount} from 'ahooks';
import {registerMicroApps, start} from 'qiankun';
// apis
// hooks
// utils
// types
import type {TypePageProps} from '@src/types';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
interface Props extends TypePageProps {}
const QiankunComponent: FunctionComponent<Props> = props => {
  const domRef = useRef<HTMLDivElement | null>(null);

  const initMicroApps = () => {
    if (domRef.current) {
      registerMicroApps([{name: 'sub-vue', entry: 'http://localhost:8888/', container: domRef.current, activeRule: '/root/qiankun'}]);
      start();
    }
  };
  useMount(initMicroApps);
  return <section className={styles['container']} ref={domRef} />;
};
export default QiankunComponent;
