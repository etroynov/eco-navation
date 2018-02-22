/*!
 * Vendor
 */

import * as React from 'react';
import get from 'lodash/get';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, Icon } from 'antd';

/*!
 * Expo
 */

const Header = ({ title, description, settings }) => (
  <header className="header">
    <div className="uc-container">
      <Head>
        <title>{ title ? title : 'Учебный центр "Автор"' }</title>
        <meta name="description" content={description} />
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
              <Link
                as="/documents"
                href="/page?slug=documents"
              >
                <a>документы</a>
              </Link>
            </Menu.Item>
            <Menu.Item key={3} style={{ float: 'right' }}>
              <Link href="/auth">
                <a>
                  <Icon type="lock" style={{ fontSize: '18px' }} />
                  вход
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key={4} style={{ float: 'right' }}>
              <Icon type="phone" /> {get(settings, 'header-phone')}
            </Menu.Item>
            <Menu.Item key={5} style={{ float: 'right' }}>
              <a href={`mailto:${get(settings, 'email')}`}><Icon type="mail" />{get(settings, 'email')}</a>
            </Menu.Item>
          </Menu>
        </nav>
      </section>
    </div>
  </header>
);

export default Header;
