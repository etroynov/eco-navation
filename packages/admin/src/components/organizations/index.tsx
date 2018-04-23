/*!
 * Vendor
 */

import * as React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button, Switch } from 'antd';

/*!
 * Actions
 */

import { deleteOrganization } from '../../actions/organizationsActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Дата',
    dataIndex: 'createdAt',
    align: 'center',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  }, {
    title: 'Кол-во сотрудников',
    dataIndex: 'employersCount',
    key: 'employersCount',
    align: 'center',
  },  {
    title: 'Подтверждена',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render(text) {
      return <Switch />;
    },
  }, {
    title: 'Действия',
    key: 'action',
    align: 'center',
    render: (text, record) => (
      <Link to={`/organizations/show/${record._id}`}>
        <Button type="primary" icon="eye" style={{ marginLeft: 10 }} />
      </Link>
    ),
  },
];

/*!
 * Expo
 */

const OrganizationsIndex = ({ loading, data }) => (
  <Table 
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ organizations: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(OrganizationsIndex as any);
