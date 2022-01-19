/**
 * index.tsx
 * @param {*} ViewComponent
 */

const templateIndexTsxFun = View => {
  return `import React from 'react'; import zhCN from 'antd/lib/locale/zh_CN'; import {ConfigProvider} from 'antd';
// apis
// hooks
// utils
// types
import type {Props} from './types.d';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
import ${View}Component from './${View}Component';
const ${View}: FunctionComponent<Props> = props => (
  <ConfigProvider locale={zhCN} input={{autoComplete: 'off'}}>
    <${View}Component {...props} />
  </ConfigProvider>
);
// const mapStateToProps = (state: TypeStore) => ({...state});
// const mapDispatchToProps = (dispatch: Dispatch) => ({});
// export default connect(mapStateToProps, mapDispatchToProps)(${View});
export default ${View};
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
  return `import styles from './${ViewName}.module.less';import React, {useState, useEffect, useMemo, Fragment} from 'react';import {useRequest, useMount, useSafeState} from 'ahooks';import {Row, Col, Modal, message} from 'antd';
// apis
// hooks
// utils
// types
import type {Props, TypeAseitResponse} from '${filePath}types.d';import type {FunctionComponent} from 'react';
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
  return `import type {TypeHsRouteComponentProps, TypeAseitResponse} from '@src/types';
type Props = TypeBaseProps;
export type {Props, TypeAseitResponse};
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
