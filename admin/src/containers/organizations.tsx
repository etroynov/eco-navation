/**
 * Dependencies
 */

import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Dashboard from '../../components/layout';
import { Link } from 'react-router-dom';
import { Table, Icon, Divider, Button } from 'antd';

/*!
 * Expo
 */

class Organizations extends React.Component<any, {
  data: any[];
  loading: boolean;
  pagination: any;
}> {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager: any = { ...this.state.pagination };
    pager.current = pagination.current;

    this.setState({
      pagination: pager,
    });
  }

  handleRecordShow = () => {
    console.info('test');
  }
  handleRecordDelete = () => {
    console.info('test');
  }

  fetch = () => {
    this.setState({ loading: true });

    axios.get('http://localhost:8081/organizations').then(({ data }) => {
      const pagination: any = { ...this.state.pagination };
      pagination.total = data.organizations.length;

      this.setState({
        pagination,
        loading: false,
        data: data.organizations,
      });
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { organizations } = this.props;
    const { data, pagination, loading } = this.state;

    return (
      <Dashboard>
        <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
          <h1 style={{ margin: 0 }}>
            Организации
          </h1>
        </header>
        <Table columns={
          [{
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
          }, {
            title: 'Действия',
            key: 'action',
            render: (text, record) => (
              <div>
                <Button type="primary" icon="eye" onClick={this.handleRecordShow} />
                <Button type="primary" icon="delete" onClick={this.handleRecordDelete} />
              </div>
            ),
          }]}
          rowKey={(record: any) => record._id}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </Dashboard>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(
  mapStateToProps,
)(Organizations);
