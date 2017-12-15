/**
 * Dependencies
 */

import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';

/*!
 * Expo
 */

const { Content } = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component<{
  form: {
    validateFields(err, values?);
    getFieldDecorator(name: string, options: object);
  };
}, {}> {
  handleSubmit = (e: Event) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/vendor.min.css"/>
        </Head>
        <Content style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: 300, height: 500 }}>
          <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>авторизация</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Укажите имя пользователя!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="имя пользователя" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Укажите пароль!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="пароль" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
              })(
                <Checkbox>запомнить меня</Checkbox>,
              )}
              <a className="login-form-forgot" href="">забыли пароль?</a>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                войти
              </Button>
              или <Link href="/registration"><a>зарегистрироватся!</a></Link>
            </FormItem>
          </Form>
        </Content>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
