/**
 * Vendor
 */

import * as React from 'react';
import CKEditor from 'react-ckeditor-component';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

/**
 * Components
 */

const FormItem = Form.Item;
const { TextArea } = Input;

/**
 * Expo
 */

class PageCreateForm extends React.Component<any, any> {
  state = {
    content: 'content',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  updateContent = (content) => {
    this.setState({ content });
  }

  onChange = (evt) => {
    console.log("onChange fired with event info: ", evt);
    const content = evt.editor.getData();
    
    this.setState({ content });
  }

  onBlur = (evt) => {
    console.log("onBlur event called with event info: ", evt);
  }

  afterPaste(evt){
    console.log("afterPaste event called with event info: ", evt);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Укажите название!' }],
          })(<Input placeholder="название страницы" />)}
        </FormItem>
        <FormItem>
          <CKEditor 
            config={{
              language: 'ru',
            }}
            activeClass="p10" 
            content={this.state.content} 
            events={{
              blur: this.onBlur,
              afterPaste: this.afterPaste,
              change: this.onChange,
            }}
          />
        </FormItem>

        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} /> 

        <h3>СЕО</h3>
        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
        <FormItem>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Укажите заголовок!' }]
          })(<Input placeholder="заголовок страницы ( тег title )" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('description', {
            rules: [{ required: true, message: 'Укажите описание!' }]
          })(
            <TextArea
              rows={4}
              placeholder="краткое описание ( тег meta='description' )"
            />,
          )}
        </FormItem>

        <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
        <FormItem>
          <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>сохранить</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedPageCreateForm = Form.create()(PageCreateForm as any);

export default WrappedPageCreateForm;
