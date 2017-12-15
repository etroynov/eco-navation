import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

/*!
 * Expo
 */


class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Head>
          <link rel="stylesheet" href="/static/css/vendor.min.css"/>
        </Head>
        <Sider
          collapsible={true}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ background: '#fff' }}
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="0">
              <Link href="/dashboard">
                <a>
                  <Icon type="desktop" />
                  <span>Главная</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link href="/dashboard/courses">
                <a>
                  <Icon type="book" />
                  <span>Курсы</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/dashboard/vebinari">
                <a>
                  <Icon type="customer-service" />
                  <span>Вебинары</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link href="/dashboard/blog">
                <a>
                  <Icon type="profile" />
                  <span>Блог</span>
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/dashboard/career">
                <a>
                  <Icon type="contacts" />
                  <span>Карьера</span>
                </a>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>главная</Breadcrumb.Item>
              <Breadcrumb.Item>курсы</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            УЦ "Автор" ©2017 разработанно <a href="http://troinof.ru/portfolio/author">troinof.ru</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
