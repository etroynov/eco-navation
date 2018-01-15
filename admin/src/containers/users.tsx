/**
 * Dependencies
 */

import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, Icon, Divider, Button } from 'antd';

/*!
 * Expo
 */

class Pages extends React.Component<any, {
  data: any[];
  loading: boolean;
  pagination: any
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

    axios.get('http://localhost:8081/pages').then(({ data }) => {
      const pagination: any = { ...this.state.pagination };
      pagination.total = data.Pages.length;

      this.setState({
        pagination,
        loading: false,
        data: data.Pages,
      });
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { Pages } = this.props;
    const { data, pagination, loading } = this.state;

    return (
      <Dashboard>
        <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
          <h1 style={{ margin: 0 }}>
            Страницы
            <Button type="primary" style={{ float: 'right', marginTop: 5 }} >Добавить страницу</Button>
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

const mapStateToProps = ({ users }) => ({ users });

export default connect(
  mapStateToProps,
)(Pages);
