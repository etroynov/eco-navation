/**
 * Dependencies
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Icon, Divider, Button } from 'antd';

import Dashboard from './../layout';

/**
 * Columns
 */

const columns = [{
  title: 'Название',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Дата',
  dataIndex: 'createdAt',
  key: 'createdAt',
}, {
  title: 'Статус',
  dataIndex: 'status',
  key: 'status',
}];

/*!
 * Expo
 */

const PagesTable = ({ loading, data }) => (
  <Table columns={[
    ...columns,
    {
      title: 'Действия',
      key: 'action',
      render: (text, record) => (
        <div>
          {/* <Button type="primary" icon="eye" onClick={} /> */}
          {/* <Button type="primary" icon="delete" onClick={} /> */}
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
)(PagesTable as any);
