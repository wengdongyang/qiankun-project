/**
 * index.tsx
 * @param {*} ViewComponent
 */

const templateIndexTsxFun = View => {
  return `import React from 'react';
import {connect} from 'react-redux';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// apis
// hooks
// utils
// types
import type {Dispatch} from 'redux';
import type {FunctionComponent} from 'react';
import type {TypePageProps, TypeStore} from '@src/types';
// stores
// configs
// components
import ${View}Component from './${View}Component';
const ${View}: FunctionComponent<TypePageProps> = props => (
  <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
    <${View}Component {...props} />
  </ConfigProvider>
);
const mapStateToProps = (state: TypeStore) => ({...state});
const mapDispatchToProps = (dispatch: Dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(${View});
`;
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
  return `import styles from './${ViewName}.module.less';
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
  return `type TypeAAA = Partial<{
  aaa: string;
}>;
export type {TypeAAA};
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
