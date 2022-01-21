/*
 * @Author: wdy
 * @Date: 2019-03-27 17:32:33
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-21 11:29:56
 * @des 主布局，多屏模式
 */
import styles from './LoginComponent.module.less';
import React from 'react';
import { useRequest } from 'ahooks';
import { Form, Input, Button } from 'antd';
// type
import type { FunctionComponent } from 'react';
import type { TypeAseitResponse, Props } from './types';
import type { TypeApiPostAuthLoginData } from '@src/apis/auth';
// config
// api
import { apiPostAuthLogin } from '@src/apis/auth';
// util
// store
// component
const LoginComponent: FunctionComponent<Props> = (props) => {
  const { loading, runAsync } = useRequest((values: TypeApiPostAuthLoginData) => apiPostAuthLogin(values), {
    manual: true,
    throttleWait: 300,
    onSuccess: (result: TypeAseitResponse) => {
      const { code, data } = result;
      if (code === '200') {
        props.history.push({ pathname: '/root' });
      }
    }
  });

  const login = async (values: TypeApiPostAuthLoginData) => {
    try {
      runAsync(values);
    } catch (error) {}
  };

  const renderForm = () => (
    <Form layout={'horizontal'} onFinish={login}>
      <Form.Item label={'用户名'} name={'username'} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        <Input placeholder={'用户名'} />
      </Form.Item>
      <Form.Item label={'密码'} name={'password'} labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        <Input.Password placeholder={'密码'} />
      </Form.Item>
      <Form.Item>
        <Button type={'primary'} loading={loading} block htmlType={'submit'}>
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
