import * as React from 'react';

/*!
 * Components
 */

import Head from 'next/head';
import Link from 'next/link';

/*!
 * Expo
 */

export default () => (
  <header className="header">
    <Head>
      <title>Учебный центр "Автор"</title>
      <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>
      <link rel="stylesheet" href="/static/css/uikit.min.css"/>
      <link rel="stylesheet" href="/static/css/style.css"/>
    </Head>
    <div className="uk-container">
      <nav className="header-menu uk-navbar-container uk-navbar uk-navbar-transparent" uk-navbar="true">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>главная</a>
              </Link>
            </li>
            <li>
              <a href="#courses">Курсы</a>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/login">
                <a><i className="icon ion-locked"></i>вход</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);
