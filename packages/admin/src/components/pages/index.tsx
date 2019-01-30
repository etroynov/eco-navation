/*!
 * Vendor
 */

import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button } from 'antd';

/*!
 * Columns
 */

const columns: any[] = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Создана',
    dataIndex: 'createdAt',
    key: 'createdAt',
    align: 'center',
    render: text =>
      moment(text)
        .locale('ru')
        .format('L'),
  },
  {
    title: 'Действия',
    key: 'action',
    align: 'center',
    render: (_, record) => (
      <>
        <Link to={`/pages/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>
      </>
    ),
  },
];

/*!
 * Expo
 */

const PagesIndex = ({ loading, data }) => (
  <Table
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ pages: { loading, data } }) => ({ loading, data });

export default connect(mapStateToProps)(PagesIndex as any);
