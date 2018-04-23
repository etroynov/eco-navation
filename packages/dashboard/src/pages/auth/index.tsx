/*!
 * Vendors
 */

import * as React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link, Redirect } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Checkbox, Modal } from 'antd';

/*!
 * Actions
 */

import { login } from './../../actions/userActions';

/*!
 * Styles
 */

import * as styles from './styles.css';

/*!
 * Expo
 */

const { Content } = Layout;
const FormItem = Form.Item;

class LoginForm extends React.Component<any, any> {
  componentWillMount() {
    const { user } = this.props;

    if (user.isAuthenticated) {
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
      <Content className={styles.panel}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Авторизация</title>
        </Helmet>
        <h2 className={styles.title}>авторизация</h2>
        <h3 className={styles.subTitle}>( 0.101.4 )</h3>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Укажите почту для входа!' }],
            })(
              <Input prefix={<Icon type="user" className={styles.formIcon} />} placeholder="example@mail.com" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Укажите пароль!' }],
            })(
              <Input prefix={<Icon type="lock" className={styles.formIcon} />} type="password" placeholder="пароль" />,
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={`login-form-button ${styles.submit}`}>
              войти
            </Button>
            или <Link to="/auth/registration">зарегистрироваться!</Link>
          </FormItem>
        </Form>
      </Content>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm as any);

const mapDispatchToProps = ({ user }) => ({ user });

export default connect(
  mapDispatchToProps,
  { login },
)(WrappedLoginForm as any);
