/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 11:58:11
 */
import styles from './RootComponent.module.less';
import React from 'react';
import {Layout, Menu} from 'antd';
import {MailOutlined, CalendarOutlined} from '@ant-design/icons';
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
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const RootComponent: FunctionComponent<Props> = props => {
  const renderAside = () => (
    <aside className={styles['aside']}>
      <header className={styles['header']}></header>
      <section className={styles['body']}>
        <Menu>
          <Menu.Item key={'home'} icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key='2' icon={<CalendarOutlined />}>
            Navigation Two
          </Menu.Item>
        </Menu>
      </section>
    </aside>
  );
  return (
    <Layout className={styles['main-layout']}>
      <Sider className={styles['main-layout-sider']} collapsible>
        {renderAside()}
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
