/*!
 * Vendor
 */

import * as React from 'react';
import { Modal, Button } from 'antd';

/*!
 * Components
 */

import Form from './form';

/*!
 * Expo
 */

class LeaveRequest extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  componentWillReceiveProps(nextPops) {
    this.setState({ ...nextPops });
  }

  showModal = () => this.setState({ visible: true });

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => this.setState({ visible: false });

  render() {
    const { visible, confirmLoading } = this.state;

    return [
      <Button size="large" onClick={this.showModal}>оставить заявку</Button>,
      <Modal
        title="Оставить заявку"
        visible={visible}
        footer={null}
        onOk={this.handleOk}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
      >
        <Form />
      </Modal>,
    ];
  }
}

export default LeaveRequest;
