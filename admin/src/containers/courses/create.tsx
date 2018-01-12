/**
 * Dependencies
 */

import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Dashboard from '../../components/layout';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

/*!
 * Expo
 */


class CourseForm extends React.Component<{
  form: any;
}> {
  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await axios.post('http://localhost:8081/course/create', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Dashboard>
        <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
          <h1 style={{ margin: 0 }}>
            Новый курс
            <Button type="primary" style={{ float: 'right', marginTop: 5 }}>
              <Link to="/courses/create">Добавить урок</Link>
            </Button>
          </h1>
        </header>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Укажите название курса!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Описание курса неможет быть пустым!' }],
            })(
              <Input type="password" placeholder="Password" />,
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Сохранить</Button>
          </FormItem>
        </Form>
      </Dashboard>
    );
  }
}

const WrappedCourseForm = Form.create()(CourseForm);

export default WrappedCourseForm;

