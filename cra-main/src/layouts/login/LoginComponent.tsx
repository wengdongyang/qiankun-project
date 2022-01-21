/*
 * @Author: wdy
 * @Date: 2019-03-27 17:32:33
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 10:52:50
 * @des 主布局，多屏模式
 */
import styles from './LoginComponent.module.less';
import { Form, Input, Button } from 'antd';
import React, { FunctionComponent } from 'react';
// type
import type { Props } from './types';
// config
// api
// util
// store
// component
const LoginComponent: FunctionComponent<Props> = (props) => {
  const [form] = Form.useForm();
  const login = async ({}) => {};

  const renderForm = () => (
    <Form layout={'horizontal'} onFinish={login}>
      <Form.Item label={'用户名'} name={'username'} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        <Input placeholder={'用户名'} />
      </Form.Item>
      <Form.Item label={'密码'} name={'password'} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        <Input.Password placeholder={'密码'} />
      </Form.Item>
      <Form.Item>
        <Button type={'primary'} block htmlType={'submit'}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
  return (
    <section className={styles['layouts']}>
      <section className={styles['form-content']}>{renderForm()}</section>
    </section>
  );
};

export default LoginComponent;
