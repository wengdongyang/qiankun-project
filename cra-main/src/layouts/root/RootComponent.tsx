/*
 * @Author: wdy
 * @Date: 2019-03-27 17:32:33
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 17:51:18
 * @des 主布局，多屏模式
 */
import styles from './RootComponent.module.less';
import qs from 'qs';
import { isEmpty } from 'lodash';
import { Layout, Menu, message, Input } from 'antd';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import React, { Fragment, FunctionComponent, useState } from 'react';
// type
import type { Props, TypeMenu } from './Root';
// config
import { MENU, INTERNAL_PAGE, ASEIT_INSPECTION_PAGE, ASEIT_SETTING_PAGE, FRIEND_INNER_PAGE, FRIEND_INNER_IFREAM, FRIEND_BLANK_PAGE } from './configs';
// api
// util
import { getActiveMenu } from './utils';
// store
// component

import ViewRouter from './components/viewRouter/ViewRouter';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const RootComponent: FunctionComponent<Props> = (props) => {
  const { menus } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<TypeMenu>({});

  const onClickMenu = (key: string) => {
    const activeMenu = getActiveMenu(menus, key);
    if (!isEmpty(activeMenu)) {
      switch (activeMenu.type) {
        case INTERNAL_PAGE:
        case ASEIT_INSPECTION_PAGE:
        case ASEIT_SETTING_PAGE:
          props.history.push({
            pathname: `/root/${activeMenu.owner}/${activeMenu.path}`
          });
          setActiveMenu(activeMenu);
          break;
        case FRIEND_INNER_PAGE:
          props.history.push({
            pathname: `/root/innerPage/${activeMenu.owner}`,
            search: qs.stringify({ path: activeMenu.path })
          });
          setActiveMenu(activeMenu);
          break;
        case FRIEND_INNER_IFREAM:
          props.history.push({
            pathname: `/root/iframe/${activeMenu.owner}`,
            search: qs.stringify({ path: activeMenu.path })
          });
          setActiveMenu(activeMenu);
          break;
        case FRIEND_BLANK_PAGE:
          window.open(activeMenu.path, '_blank');
          break;
        case MENU:
        default:
          setActiveMenu(activeMenu);
          break;
      }
    } else {
      message.error('菜单问题！');
    }
  };
  const renderSider = () => (
    <Sider className={styles['sider']} collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
      <header className={styles['logo']}>
        <img src={require('./assets/images/logo.png')} alt="" />
      </header>
      <section className={styles['menus']}>
        <Menu mode={'inline'} selectedKeys={activeMenu?.id ? [activeMenu.id] : []} onClick={({ key }) => onClickMenu(key.toString())}>
          {menus.map((menu) => (
            <Fragment key={menu.id}>
              {menu.type !== MENU ? (
                <Menu.Item key={menu.id} icon={<PieChartOutlined />}>
                  {menu.name}
                </Menu.Item>
              ) : (
                <SubMenu key={menu.id} icon={<UserOutlined />} title={menu.name}>
                  {menu?.children?.map((sub) => (
                    <Menu.Item key={sub.id}>{sub.name}</Menu.Item>
                  ))}
                </SubMenu>
              )}
            </Fragment>
          ))}
        </Menu>
      </section>
    </Sider>
  );
  return (
    <Layout className={styles['layout']}>
      {renderSider()}
      <Layout className={styles['sub-layout']}>
        <Header className={styles['sub-header']}>
          <h1 className={styles['title']}>{process.env.REACT_APP_TITLE}</h1>
          <Input type={'text'} value={props.baseURL} onChange={(e) => props.setBaseURL(e.target.value)} />
        </Header>
        <Content className={styles['sub-content']}>
          <ViewRouter />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootComponent;
