/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 12:02:45
 */
import styles from './LoginComponent.module.less';
import React from 'react';
import {Form, Input, Button} from 'antd';
// apis
import {apiPostAuthLogin} from '@src/apis/auth';
// hooks
// utils
// types
import type {TypeHsRouteComponentProps} from '@src/types';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
interface Props extends TypeHsRouteComponentProps {}
const LoginComponent: FunctionComponent<Props> = props => {
  const [form] = Form.useForm();

  const onClickLogin = async () => {
    try {
      const values = await form.validateFields();
      const {username, password} = values;
      const {code, data} = await apiPostAuthLogin({username, password});
      if (code === '200') {
        props.history.push({pathname: '/root'});
      }
    } catch (error) {}
  };
  return (
    <section className={styles['layouts']}>
      <section className={styles['form-content']}>
        <Form className={styles['form']} form={form} onFinish={onClickLogin}>
          <Form.Item
            className={styles['form-item']}
            label={'用户名'}
            name={'username'}
            labelCol={{span: 6}}
            wrapperCol={{span: 16}}
            rules={[{required: true}]}>
            <Input />
          </Form.Item>
          <Form.Item
            className={styles['form-item']}
            label={'密码'}
            name={'password'}
            labelCol={{span: 6}}
            wrapperCol={{span: 16}}
            rules={[{required: true}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item className={styles['form-item']}>
            <Button type={'primary'} htmlType={'submit'} block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </section>
    </section>
  );
};
export default LoginComponent;
