import * as React from 'react';
import Head from 'next/head';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/*!
 * Expo
 */


class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Head>
          <link rel="stylesheet" href="/static/css/vendor.min.css"/>
        </Head>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ background: '#fff' }}
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="0">
              <Icon type="desktop" />
              <span>Главная</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="book" />
              <span>Курсы</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="customer-service" />
              <span>Вебинары</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="profile" />
              <span>Блог</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="contacts" />
              <span>Карьера</span>
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
              Bill is a cat.
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


export default SiderDemo;
