/*!
 * Vendor
 */

import * as React from 'react';
import CKEditor from 'react-ckeditor-component';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox, Select, Tabs } from 'antd';

/*!
 * Actions
 */

import { updateLesson } from '../../actions/lessonsActions';
import { success } from './../../utils/modals';

/*!
 * Components
 */

const FormItem = Form.Item;

/**
 * Expo
 */

class LessonUpdateForm extends React.Component<{
  _id: string;
  form: any;
  updateLesson: any;
  params: any;
}, any> {
  state = {
    _id: '',
    content: '',
    status: 0,
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({ _id: id });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updateLesson({ ...values, ...this.state }).then(success);
      }
    });
  }

  updateContent       = content => this.setState({ content });
  handelChangeStatus  = status  => this.setState({ status });
  handleChangeContent = e       => this.setState({ content: e.editor.getData() });
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { content } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Укажите тему урока!' }],
          })(<Input placeholder="тема урока" />)}
        </FormItem>
        <FormItem>
          <CKEditor 
            config={{
              language: 'ru',
              allowedContent: true,
            }}
            content={content} 
            events={{ change: this.handleChangeContent }}
          />
        </FormItem>

        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLessonUpdateForm = Form.create()(LessonUpdateForm as any);

export default connect(null,
  { updateLesson },
)(WrappedLessonUpdateForm as any);
