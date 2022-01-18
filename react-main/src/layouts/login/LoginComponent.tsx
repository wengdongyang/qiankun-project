/*
 * @Author: wdy
 * @Date: 2021-09-23 17:22:55
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-18 18:34:44
 */
import styles from './LoginComponent.module.less';
import React, {Fragment} from 'react';
import {Form, Input, Button} from 'antd';
// apis
// hooks
// utils
// types
import type {TypeHsRoute} from '@src/types';
import type {FunctionComponent} from 'react';
// stores
// configs
// components
interface Props extends TypeHsRoute {}
const LoginComponent: FunctionComponent<Props> = props => {
  const form = Form.useForm();
  return (
    <section className={styles['layouts']}>
      <section className={styles['form-content']}>
        <Form className={styles['form']}>
          <Form.Item className={styles['form-item']} label={'用户名'} name={'username'} labelCol={{span: 6}} wrapperCol={{span: 16}}>
            <Input />
          </Form.Item>
          <Form.Item className={styles['form-item']} label={'密码'} name={'password'} labelCol={{span: 6}} wrapperCol={{span: 16}}>
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
