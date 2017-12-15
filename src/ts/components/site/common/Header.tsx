import * as React from 'react';

/*!
 * Components
 */

import Head from 'next/head';
import Link from 'next/link';
import { Menu, Icon } from 'antd';

import Container from './Container';

/*!
 * Expo
 */

export default () => (
  <header className="header">
    <Head>
      <title>Учебный центр "Автор"</title>
      <link rel="stylesheet" href="/static/css/vendor.min.css"/>
      <link rel="stylesheet" href="/static/css/site.min.css"/>
    </Head>
    <Container>
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
        </Menu>
      </nav>
    </Container>
    
  </header>
);
