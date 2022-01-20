/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-20 11:51:54
 */
import styles from './RootComponent.module.less';
import {isEmpty} from 'lodash';
import React, {Suspense} from 'react';
import {Switch} from 'react-router-dom';
import {Layout, Menu, Spin} from 'antd';
import {useRequest, useMount, useSafeState} from 'ahooks';
import {MailOutlined, CalendarOutlined} from '@ant-design/icons';
// apis
import {apiGetAuthMenuTree} from '@src/apis/auth';
// hooks
// utils
import {getTreeDataByKey} from '@src/utils';
// types
import type {FunctionComponent} from 'react';
import type {TypePageProps, TypeAseitResponse} from '@src/types';
import type {TypeMenu} from './types.d';
// stores
// configs
// components
import {HsdRoute} from '@src/components';
interface Props extends TypePageProps {}
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const RootComponent: FunctionComponent<Props> = props => {
  const {routes = []} = props;
  const [menuTree, setMenuTree] = useSafeState<TypeMenu[]>([]);
  const {loading: loadingGetAuthMenuTree, runAsync} = useRequest(() => apiGetAuthMenuTree(), {
    manual: true,
    throttleWait: 300,
    onSuccess: (result: TypeAseitResponse) => {
      const {code, data} = result;
      setMenuTree(code === '200' && data?.length ? data : []);
    },
  });

  const onClickMenu = (key: string) => {
    try {
      const selectMenu: TypeMenu = getTreeDataByKey(menuTree, key, {keyKey: 'id', childrenKey: 'children'});
      const {route = {}} = selectMenu;
      if (!isEmpty(route)) {
        const {type, path = ''} = route;
        switch (type) {
          case 'self':
            props.history.push({pathname: `/root${path}`});
            break;
          case 'qiankun':
            window.history.pushState({}, '', `/root${path}`);
            break;
          default:
            break;
        }
      }
    } catch (error) {}
  };
  useMount(runAsync);

  const renderMenu = (menuTree: TypeMenu[]) => {
    return menuTree.map((menuItem: TypeMenu) =>
      menuItem?.children?.length ? (
        <SubMenu key={menuItem.id} title={menuItem.name} icon={<MailOutlined />}>
          {renderMenu(menuItem.children || [])}
        </SubMenu>
      ) : (
        <Menu.Item key={menuItem.id} title={menuItem.name} icon={<CalendarOutlined />}>
          {menuItem.name}
        </Menu.Item>
      ),
    );
  };

  const renderAside = () => (
    <aside className={styles['aside']}>
      <header className={styles['header']}></header>
      <section className={styles['body']}>
        {loadingGetAuthMenuTree ? (
          <Spin className={styles['menu-tree-spin']} />
        ) : (
          <Menu
            mode={'inline'}
            onClick={({key}) => {
              onClickMenu(`${key}`);
            }}>
            {renderMenu(menuTree)}
          </Menu>
        )}
      </section>
    </aside>
  );
  return (
    <Layout className={styles['main-layout']}>
      <Sider className={styles['main-layout-sider']} width={300} collapsible>
        {renderAside()}
      </Sider>
      <Layout className={styles['layout']}>
        <Header className={styles['layout-header']} />
        <Content className={styles['layout-content']}>
          <Suspense fallback={<Spin className={styles['layout-content-spin']} />}>
            <Switch>
              {routes.map((route, i) => (
                <HsdRoute key={i} {...route} />
              ))}
            </Switch>
          </Suspense>
        </Content>
        <Footer className={styles['layout-footer']}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
export default RootComponent;
