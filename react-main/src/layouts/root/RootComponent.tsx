/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 14:14:18
 */
import styles from './RootComponent.module.less';
import React from 'react';
import {isEmpty} from 'lodash';
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
import type {TypeHsRouteComponentProps, TypeAseitResponse} from '@src/types';
import type {TypeMenu, TypeRoute} from './types.d';
// stores
// configs
// components
interface Props extends TypeHsRouteComponentProps {}
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
const RootComponent: FunctionComponent<Props> = props => {
  const [menuTree, setMenuTree] = useSafeState<TypeMenu[]>([]);
  const {loading: loadingGetAuthMenuTree, runAsync} = useRequest(apiGetAuthMenuTree, {
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
          <Spin className={styles['spin-menu-tree']} />
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
