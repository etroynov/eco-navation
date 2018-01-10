import * as React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/layout';
import { Link } from 'react-router-dom';
import { Table, Icon, Divider } from 'antd';

const columns = [{
  title: 'Название',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Руководитель',
  dataIndex: 'director',
  key: 'director',
}, {
  title: 'Адрес',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Действия',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Delete</a>
      <Divider type="vertical" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

/*!
 * Expo
 */

class Organizations extends React.Component<any, any> {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then((data) => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { organizations } = this.props;
    return (
      <Dashboard>
        <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
          <h1 style={{ margin: 0 }}>
            Организации
          </h1>
        </header>
        <Table columns={columns}
          rowKey={record => record.registered}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
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
