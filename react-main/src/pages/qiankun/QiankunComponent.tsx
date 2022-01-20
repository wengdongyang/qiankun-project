import styles from './QiankunComponent.module.less';
import React, {useRef, useEffect} from 'react';
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

  useEffect(() => {
    start();
  }, []);
  return (
    <section className={styles['container']} id={'qiankunContainer'} ref={domRef}>
      QiankunComponent
    </section>
  );
};
export default QiankunComponent;
