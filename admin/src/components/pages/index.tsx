/**
 * Dependencies
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';

/**
 * Columns
 */

const columns = [{
  title: 'Название',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Статус',
  dataIndex: 'status',
  key: 'status',
}];

/*!
 * Expo
 */

const PagesIndex = ({ loading, data }) => (
  <Table columns={[
    ...columns,
    {
      title: 'Дата',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text, record) => (
        <p>1</p>
      ),
    }, {
      title: 'Действия',
      key: 'action',
      render: (text, record) => (
        <div style={{ textAlign: 'center' }}>
          <Link to="/pages/show">
            <Button type="primary" icon="eye" />
          </Link>

          <Link to={`/pages/edit/${record._id}`}>
            <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
          </Link>

          <Button type="primary" icon="delete" style={{ marginLeft: 10 }} />
        </div>
      ),
    }]
  }
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ pages: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(PagesIndex as any);
