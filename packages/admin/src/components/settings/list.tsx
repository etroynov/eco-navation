/*!
 * Vendor
 */

import React from 'react';
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
    title: 'Ключ',
    dataIndex: 'slug',
    key: 'sulg',
    align: 'center',
  },
  {
    title: 'значение',
    dataIndex: 'value',
    key: 'value',
    align: 'center',
  },
  {
    title: 'Действия',
    key: 'action',
    align: 'center',
    render: (_, record) => (
      <div>
        <Link to={`/settings/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>
      </div>
    ),
  },
];

/*!
 * Expo
 */

const SettingssIndex: React.FunctionComponent<{
  loading: boolean;
  data: any[];
}> = ({ loading, data }) => (
  <Table
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ settings: { loading, data } }) => ({
  loading,
  data,
});

export default connect(mapStateToProps)(SettingssIndex);
