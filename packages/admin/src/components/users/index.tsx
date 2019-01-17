/*!
 * Vendor
 */

import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button, Switch } from 'antd';

/*!
 * Actions
 */

import { deleteUser, resetUserPassword } from '../../actions/usersActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'ФИО',
    dataIndex: 'fio',
    key: 'fio',
  },
  {
    title: 'Компания',
    dataIndex: 'organization',
    key: 'organization',
    align: 'center',
    render: () => 'частное лицо',
  },
  {
    title: 'Зарегистрирован',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: (text: string) =>
      moment(text)
        .locale('ru')
        .format('L'),
  },
  {
    title: 'Оплачен',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: () => <Switch />,
  },
];

/*!
 * Expo
 */

const Index = ({ loading, data, deleteUser, resetUserPassword }) => (
  <Table
    columns={[
      ...columns,
      {
        title: 'Действия',
        key: 'action',
        align: 'center',
        render: (_text: string, record: { _id: string }) => (
          <div>
            <Link to={`/users/edit/${record._id}`}>
              <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
            </Link>

            <Button
              title="Сбросить пароль"
              type="primary"
              icon="reload"
              style={{ marginLeft: 10 }}
              onClick={resetUserPassword.bind(null, record._id)}
            />

            <Button
              type="primary"
              icon="delete"
              style={{ marginLeft: 10 }}
              onClick={deleteUser.bind(null, record._id)}
            />
          </div>
        ),
      },
    ]}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ users: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
  { deleteUser, resetUserPassword },
)(Index as any);
