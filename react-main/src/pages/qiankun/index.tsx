import React from 'react';
// apis
// hooks
// utils
// types
import type {TypePageProps} from '@src/types';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
import QiankunComponent from './QiankunComponent';
interface Props extends TypePageProps {}
const Qiankun: FunctionComponent<Props> = props => {
  return <QiankunComponent {...props} />;
};
export default Qiankun;
