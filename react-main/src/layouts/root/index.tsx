import React from 'react';
// apis
// hooks
// utils
// types
import type {FunctionComponent} from 'react';
import type {TypeHsRouteComponentProps} from '@src/types';
// stores
// configs
// components
import RootComponent from './RootComponent';
interface Props extends TypeHsRouteComponentProps {}
const Root: FunctionComponent<Props> = props => {
  return <RootComponent {...props} />;
};
export default Root;
