/*
 * @Author: wdy
 * @Date: 2019-03-27 17:32:33
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 16:15:48
 * @des 主布局，多屏模式
 */
import styles from './LoginComponent.module.less';
import { Button } from 'antd';
import React, { FunctionComponent } from 'react';
// type
import type { Props } from './Login.d';
// config
import { menuConfigs } from './configs';
// api
// util
// store
// component
const LoginComponent: FunctionComponent<Props> = (props) => {
  const login = async () => {
    await props.setMenus(menuConfigs);
    await props.history.push({
      pathname: '/root'
    });
  };

  const onClickLogin = login;
  /**
   * form部分
   */
  const renderForm = () => (
    <div className={styles['form']}>
      <Button size={'large'} block onClick={onClickLogin}>
        登录
      </Button>
    </div>
  );
  return (
    <section className={styles['container']}>
      <div className={styles['bg-container']}>
        <div className={styles['login-container']}>{renderForm()}</div>
      </div>
    </section>
  );
};

export default LoginComponent;
