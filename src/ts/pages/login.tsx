/**
 * Dependencies
 */

import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/**
 * Components
 */

import Sidebar from '../components/dashboard/common/Sidebar';
import Footer from '../components/dashboard/common/Footer';

/*!
 * Expo
 */

export default () => (
  <div className="page">
    <Head>
      <link rel="stylesheet" href="/static/css/uikit.min.css"/>
      <link rel="stylesheet" href="/static/css/dashboard.css"/>
      <title>Вход</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Sidebar />
    <div className="page__content">
      <div className="page__header-container">
        <header className="header">
          <h2 className="header__title">Вход</h2>
          <ul className="header__menu menu nav">
            <li className="menu__item">
              <a>
              </a>
            </li>
            <li className="menu__item">
              <a>
                <svg width="32" height="32" className="svg-icon icon-search ">
                  <svg id="icon-search" viewBox="0 0 32 32" width="100%" height="100%">
                    <path d="M14 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C8.477 24 4 19.523 4 14S8.477 4 14 4s10 4.477 10 10-4.477 10-10 10zM21.043 22.457l5.25 5.25a1 1 0 0 0 1.414-1.414l-5.25-5.25a1 1 0 0 0-1.414 1.414z" />
                  </svg>
                </svg>
              </a>
            </li>
            <li className="menu__item">
              <Link href="/login">
                <a>Вход</a>
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/registration">
                <a>Регистрация</a>
              </Link>
            </li>
          </ul>
        </header>
      </div>
       <div className="login-box uk-flex uk-flex-center">
          <form action="" className="login-form uk-width-1-4">
            <div className="uk-margin">
              <input type="text" className="uk-input" placeholder="E-mail" />
            </div>
            <div className="uk-margin">
              <div className="uk-form-controls">
                <input type="text" className="uk-input" placeholder="Пароль" />
              </div>
            </div>
            <div className="uk-margin">
              <label><input className="uk-checkbox" type="checkbox" /> Запомнить меня</label>
            </div>
            <div className="uk-margin">
              <Link href="/dashboard">
                <input type="submit" className="uk-button uk-button-primary uk-width-1-1" value="войти" />
              </Link>
            </div>
          </form>
        </div>
        <Footer />
    </div>
  </div>
);
