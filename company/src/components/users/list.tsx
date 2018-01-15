/**
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

/**
 * Table settings
 */

const columns = [{
  title: 'ФИО',
  dataIndex: 'fio',
  key: 'fio',
}, {
  title: 'Должность',
  dataIndex: 'position',
  key: 'position',
}, {
  title: 'Электронная почта',
  dataIndex: 'email',
  key: 'email',
}, {
  title: 'Статус',
  dataIndex: 'status',
  key: 'status',
  render: (_, { status }) => {
    if (status === 0) return <span style={{ color: 'red' }}>Не подтвержден</span>;
    
    return <span style={{ color: 'green' }}>Подтвержден</span>;
  }
}];


/*!
 * Expo
 */

const UsersList = ({ employers = [] }) => <Table dataSource={employers} columns={columns} />;

const mapStateToProps = ({ organization: { employers } }) => ({ employers });

export default connect(
  mapStateToProps,
)(UsersList);
