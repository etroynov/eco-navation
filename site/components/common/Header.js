import * as React from 'react';

/*!
 * Components
 */

import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';

/*!
 * Utils
 */

/*!
 * Expo
 */

const Header = ({ settings }) => (
  <header className="header">
    <Head>
      <title>Учебный центр "Автор"</title>
      <link rel="stylesheet" href="/static/css/antd.min.css"/>
      <link rel="stylesheet" href="/static/css/style.min.css"/>
    </Head>
    <section>
      <nav>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key={0}>
            <img src="/static/img/logo.png" alt="" width={90} />
          </Menu.Item>
          <Menu.Item key={1}>
            <Link href="/">
              <a>главная</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={2}>
            <Link href="/courses">
              <a>курсы</a>
            </Link>
          </Menu.Item>
          <Menu.Item key={3} style={{ float: 'right' }}>
            <Link href="/login">
              <a>
                <Icon type="lock" style={{ fontSize: '18px' }} />
                вход
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key={4} style={{ float: 'right' }}>
            <Icon type="phone" /> +7 (904) 812-57-38
          </Menu.Item>
          <Menu.Item key={5} style={{ float: 'right' }}>
            <a href="mailto:kursy@ucavtor.ru"><Icon type="mail" />kursy@ucavtor.ru</a>
          </Menu.Item>
        </Menu>
      </nav>
    </section>
  </header>
);

const mapStateToProps = ({ settings }) => ({ settings });

export default connect(
  mapStateToProps,
)(Header);