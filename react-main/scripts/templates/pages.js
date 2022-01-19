/**
 * index.tsx
 * @param {*} ViewComponent
 */
const templateIndexTsxFun = View => {
  return `
import React from 'react';import {connect} from 'react-redux';import zhCN from 'antd/lib/locale/zh_CN';import {Breadcrumb, ConfigProvider} from 'antd';
// apis
// hooks
// utils
// types
import type {Dispatch} from 'redux';import type {FunctionComponent} from 'react';import type {TypeStore, TypeBaseProps, Props} from './types.d';
// stores
// configs
// components
import {AsdLayout} from '@src/components/index';import ${View}Component from './${View}Component';
const ${View}: FunctionComponent<Props> = props => (
  <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
    <AsdLayout breadcrumbs={<Breadcrumb><Breadcrumb.Item>AAA</Breadcrumb.Item></Breadcrumb>}>
      <${View}Component {...props} />
    </AsdLayout>
  </ConfigProvider>
);
const mapStateToProps = (state: TypeStore) => ({...state});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export type {TypeBaseProps, Props};
export default connect(mapStateToProps, mapDispatchToProps)(${View});`;
};
/**
 * apis.ts
 * utils.ts
 * hooks.ts
 * configs.ts
 * @returns
 */
const templateEmptyFileTsFun = FileName => {
  return `// apis
// hooks
// utils
// types
// stores
// configs
// components
const base${FileName} = '';
export {base${FileName}};
`;
};
/**
 * HomeComponent.tsx
 * @param {*} ViewComponent
 */
const templatePageComponentTsxFun = (ViewName, filePath) => {
  return `import styles from './${ViewName}.module.less';import React, {useState, useEffect, useMemo, Fragment} from 'react';import {Row, Col, Modal, message} from 'antd';
// apis
// hooks
// utils
// types
import type {Props} from '${filePath}types.d';import type {FunctionComponent} from 'react';
// stores
// configs
// components
interface InnerProps extends Props {}
const ${ViewName}: FunctionComponent<InnerProps> = props => {
  return <section className={styles['container']}>${ViewName}</section>;
}
export default ${ViewName};
`;
};

/**
 * HomeComponent.tsx
 * @param {*} ViewComponent
 */
const templateTypesDTsFun = () => {
  return `import type {TypeStore, TypeBaseProps} from '@src/types/index';
type Props = TypeBaseProps;
export type {TypeStore, TypeBaseProps, Props};
`;
};

/**
 * Test.module.less
 * @param {*} ViewComponent
 */
const templateComponentModuleLessFun = () => {
  return `@import '@src/styles/configs/index.less';
@import '@src/styles/mixins/index.less';
`;
};

module.exports = {
  templateIndexTsxFun,
  templateTypesDTsFun,
  templateEmptyFileTsFun,
  templatePageComponentTsxFun,
  templateComponentModuleLessFun,
};
