import React from 'react';
// apis
// hooks
// utils
// types
import type {TypeHsRouteComponentProps} from '@src/types';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
import QiankunComponent from './QiankunComponent';
interface Props extends TypeHsRouteComponentProps {}
const Qiankun: FunctionComponent<Props> = props => {
  return <QiankunComponent {...props} />;
};
export default Qiankun;
