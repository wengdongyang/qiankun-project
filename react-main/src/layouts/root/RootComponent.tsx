/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:20:33
 */
import styles from './RootComponent.module.less';
import React, {Fragment} from 'react';
import {Layout} from 'antd';
// apis
// hooks
// utils
// types
import type {FunctionComponent} from 'react';
import type {TypeHsRouteComponentProps} from '@src/types';
// stores
// configs
// components
interface Props extends TypeHsRouteComponentProps {}
const {Header, Content, Footer, Sider} = Layout;
const RootComponent: FunctionComponent<Props> = props => {
  return (
    <Layout className={styles['main-layout']}>
      <Sider className={styles['main-layout-sider']} collapsible>
        <div className='logo' />
      </Sider>
      <Layout className={styles['layout']}>
        <Header className={styles['layout-header']} />
        <Content className={styles['layout-content']}>
          <div className='site-layout-background' style={{padding: 24, minHeight: 360}}>
            Bill is a cat.
          </div>
        </Content>
        <Footer className={styles['layout-footer']}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
export default RootComponent;
