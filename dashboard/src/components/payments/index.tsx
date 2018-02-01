/*!
 * Vendor
 */

import * as React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button } from 'antd';

/*!
 * Actions
 */


/*!
 * Columns
 */

const columns: any = [
  {
    title: 'Тип платежа',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: 'Продукт',
    dataIndex: 'course',
    key: 'course',
  }, {
    title: 'Создан',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  },  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render(text) {
      switch (status) {
        case 'charged': return <p>опубликованно</p>;
        case 'rejected': return <p>отклонен</p>;
        default: return <p>черновик</p>;
      }
    },
  },
];

/*!
 * Expo
 */

const CoursesIndex = ({ loading, data, deleteCourse }) => (
  <Table 
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ payments }) => ({ payments });

export default connect(null, mapStateToProps)(CoursesIndex as any);
