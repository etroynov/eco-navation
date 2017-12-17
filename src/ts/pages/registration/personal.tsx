/**
 * Dependencies
 */

import * as React from 'react';
import Head from 'next/head';

import { Layout, Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

/*!
 * Expo
 */

const { Content } = Layout;
const FormItem = Form.Item;

class NormalLoginForm extends React.Component<{
  form: {
    validateFields(err: object, values?: object);
    getFieldDecorator(name: string, options: object);
  },
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
        <Content style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: 900, height: 800 }}>
          <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
            <img
              alt="example"
              src="https://www.annieandre.com/wp-content/uploads/2017/10/briefcase-work-job.png"
              style={{ display: 'inline-block', width: 200, padding: 20 }}
            />
            <p>абитуриент</p>
          </h2>
          <Form onSubmit={this.handleSubmit} className="personal-registration-form">
            <Row type="flex" align="space-between">
              <Col span={8} style={{ padding: 20 }}>
                <fieldset>
                  <legend>Ваши данные</legend>
                  <FormItem>
                    {getFieldDecorator('fio', {
                      rules: [{ required: true, message: 'Укажите ФИО!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Иванов Иван Иванович" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('position', {
                      rules: [{ required: true, message: 'Укажите должность!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="должность" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Укажите email!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="example@mail.com" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('accept', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox>я представитель компании</Checkbox>,
                    )}
                  </FormItem>
                </fieldset>
              </Col>
              <Col span={8} style={{ padding: 20 }}>
              <fieldset>
                  <legend>Данные организации</legend>
                  <FormItem>
                    {getFieldDecorator('organization', {
                      rules: [{ required: true, message: 'Укажите название организации' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="название организации" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('inn', {
                      rules: [{ required: true, message: 'Укажите ИНН' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="ИНН" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('kpp', {
                      rules: [{ required: true, message: 'Укажите КПП' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="КПП" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('bankAccount', {
                      rules: [{ required: true, message: 'Укажите р/с' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="р/с" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('bic', {
                      rules: [{ required: true, message: 'Укажите БИК' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="БИК" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('address', {
                      rules: [{ required: true, message: 'Укажите почтовый адрес' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="почтовый адрес" />,
                    )}
                  </FormItem>
                </fieldset>
              </Col>
              <Col span={8} style={{ padding: 20 }}>
                <fieldset>
                  <legend>Лицо, подписывающее договор</legend>
                  <FormItem>
                    {getFieldDecorator('directorName', {
                      rules: [{ required: true, message: 'Укажите имя!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="имя" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('directorLastName', {
                      rules: [{ required: true, message: 'Укажите фамилию!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="фамилия" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('directorSoName', {
                      rules: [{ required: true, message: 'Укажите отчество!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="отчество" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('directorPosition', {
                      rules: [{ required: true, message: 'Укажите должность!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="должность" />,
                    )}
                  </FormItem>
                </fieldset>
              </Col>
              <Col span={24} style={{ padding: '0 20px' }}>
                <hr />
              </Col>
              <FormItem style={{ padding: '0 20px' }}>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                  зарегистрироватся
                </Button>
              </FormItem>
              <FormItem style={{ padding: '0 20px' }}>
                {getFieldDecorator('accept', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>Я согласен на обработку персональных данных</Checkbox>,
                )}
              </FormItem>
            </Row>
          </Form>
        </Content>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
