/**
 * Dependencies
 */

import * as React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Checkbox, Modal } from 'antd';

import { login } from './../actions/authActions';

/*!
 * Components
 */

const { Content } = Layout;
const FormItem = Form.Item;


const Title = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

const Version = styled.h3`
  font-size: 15px;
  text-align: center;
`;

const Submit = styled(Button)`
  width: 100%;
`;

const LoginFormContainer = styled(Content)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 500px;
`;

/*!
 * Expo
 */

class LoginForm extends React.Component<any, any> {
  componentWillMount() {
    const { auth } = this.props;

    if (auth.isAuthenticated) {
      location.pathname = '/';
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        this.props.login(values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <LoginFormContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Авторизация</title>
        </Helmet>
        <Title>авторизация</Title>
        <Version>( 0.31.0 )</Version>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
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
            <Submit type="primary" htmlType="submit" className="login-form-button">
              войти
            </Submit>
            или <Link to="/registration">зарегистрироваться!</Link>
          </FormItem>
        </Form>
      </LoginFormContainer>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm as any);

const mapDispatchToProps = ({ auth }) => ({ auth });

export default connect(
  mapDispatchToProps,
  { login },
)(WrappedLoginForm as any);
