/**
 * Vendor
 */

import * as React from 'react';
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select } from 'antd';

import { createCourse } from '../../actions/coursesActions';

/**
 * Components
 */

const Option = Select.Option;
const FormItem = Form.Item;
const { TextArea } = Input;

/**
 * Expo
 */

class CourseCreateForm extends React.Component<any, any> {
  state = {
    content: '',
    status: 0,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.info({ ...values, ...this.state });
        this.props.createCourse({ ...values, ...this.state });
      }
    });
  }

  updateContent = (content) => {
    this.setState({ content });
  }

  handleChangeContent = (e) => {
    const content = e.editor.getData();
    
    this.setState({ content });
  }
  
  handelChangeStatus = status => this.setState({ status });

  render() {
    const { getFieldDecorator } = this.props.form;
    const { content } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Укажите название!' }],
          })(<Input placeholder="название курса" />)}
        </FormItem>
        <FormItem>
          <CKEditor 
            config={{
              language: 'ru',
              allowedContent: true,
            }}
            content={content} 
            events={{
              change: this.handleChangeContent,
            }}
          />
        </FormItem>

        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} /> 

        <h3>СЕО</h3>
        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />

        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Укажите заголовок!' }],
          })(<Input placeholder="заголовок страницы ( тег title )" />)}
        </FormItem>

        <FormItem>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Укажите описание!' }],
          })(
            <TextArea
              rows={4}
              placeholder="краткое описание ( тег meta='description' )"
            />,
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('slug', {
            rules: [{ required: true, message: 'Укажите ЧПУ!' }],
          })(
            <Input placeholder="адрес страницы, например: testpage" />,
          )}
        </FormItem>

        <h3>Дополнительные параметры</h3>
        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />

        <FormItem>
          {getFieldDecorator('price', {
            rules: [{ required: true, message: 'Укажите цену!' }]
          })(
            <Input placeholder="стоимость курса" />,
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('duration', {
            rules: [{ required: true, message: 'Укажите продолжительность курса!' }]
          })(
            <Input placeholder="продолжительность курса в часах" />,
          )}
        </FormItem>

        <FormItem>
          <Select defaultValue="0" onChange={this.handelChangeStatus}>
            <Option value="0">Черновик</Option>
            <Option value="1">Опубликованно</Option>
          </Select>
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCourseCreateForm = Form.create()(CourseCreateForm as any);

export default connect(
  null,
  { createCourse },
)(WrappedCourseCreateForm as any);
