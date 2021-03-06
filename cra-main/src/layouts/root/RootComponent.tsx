/*
 * @Author: wdy
 * @Date: 2019-03-27 17:32:33
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:40:54
 * @des 主布局，多屏模式
 */
import styles from './RootComponent.module.less';
import qs from 'qs';
import { isEmpty } from 'lodash';
import { Layout, Menu, message, Input } from 'antd';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import React, { Fragment, useState } from 'react';
// type
import type { Props } from './types';
import type { FunctionComponent } from 'react';
// api
// util
// store
// config
// component

import ViewRouter from './components/viewRouter/ViewRouter';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const RootComponent: FunctionComponent<Props> = (props) => {
  // const { menus } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  // const [activeMenu, setActiveMenu] = useState<TypeMenu>({});

  const onClickMenu = (key: string) => {
    // const activeMenu = getActiveMenu(menus, key);
    // if (!isEmpty(activeMenu)) {
    //   switch (activeMenu.type) {
    //     case INTERNAL_PAGE:
    //     case ASEIT_INSPECTION_PAGE:
    //     case ASEIT_SETTING_PAGE:
    //       props.history.push({
    //         pathname: `/root/${activeMenu.owner}/${activeMenu.path}`
    //       });
    //       setActiveMenu(activeMenu);
    //       break;
    //     case FRIEND_INNER_PAGE:
    //       props.history.push({
    //         pathname: `/root/innerPage/${activeMenu.owner}`,
    //         search: qs.stringify({ path: activeMenu.path })
    //       });
    //       setActiveMenu(activeMenu);
    //       break;
    //     case FRIEND_INNER_IFREAM:
    //       props.history.push({
    //         pathname: `/root/iframe/${activeMenu.owner}`,
    //         search: qs.stringify({ path: activeMenu.path })
    //       });
    //       setActiveMenu(activeMenu);
    //       break;
    //     case FRIEND_BLANK_PAGE:
    //       window.open(activeMenu.path, '_blank');
    //       break;
    //     case MENU:
    //     default:
    //       setActiveMenu(activeMenu);
    //       break;
    //   }
    // } else {
    //   message.error('菜单问题！');
    // }
  };
  const renderSider = () => (
    <Sider
      className={styles['sider']}
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed) => setCollapsed(collapsed)}
    >
      <header className={styles['logo']}></header>
      <section className={styles['menus']}>
        {/* <Menu mode={'inline'} selectedKeys={activeMenu?.id ? [activeMenu.id] : []} onClick={({ key }) => onClickMenu(key.toString())}>
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
        </Menu> */}
      </section>
    </Sider>
  );
  return (
    <Layout className={styles['layout']}>
      {renderSider()}
      <Layout className={styles['sub-layout']}>
        <Header className={styles['sub-header']}>
          <h1 className={styles['title']}>title</h1>
        </Header>
        <Content className={styles['sub-content']}>
          <ViewRouter />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootComponent;
