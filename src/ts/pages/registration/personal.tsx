/**
 * Dependencies
 */

import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Site from '../../components/site/layout';

import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';

/*!
 * Expo
 */

const { Content } = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component<{}, {
  form: {
    getFieldDecorator: () => {};
  }
}> {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/vendor.min.css"/>
        </Head>
        <Content style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          width: 300,
          height: 395
        }}>
          <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>абитуриент</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Укажите имя!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="имя" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('userLastName', {
                rules: [{ required: true, message: 'Укажите фамилию!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="фамилия" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('userSoName', {
                rules: [{ required: true, message: 'Укажите отчество!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="отчество" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Укажите Email!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Укажите пароль!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="пароль" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                зарегистрироватся
              </Button>
            </FormItem>
          </Form>
        </Content>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
