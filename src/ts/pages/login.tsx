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
                <svg width="32" height="32" className="svg-icon icon-voice-of-marketing">
                  <svg id="icon-voice-of-marketing" viewBox="0 0 32 32" width="100%" height="100%">
                    <path d="M21 11.005v12.882c-1.992-1.441-5.702-3.578-11-4.467v-8.836c5.291-0.895 9.006-3.035 11-4.475v4.896zM8 19.151c-0.952-0.093-1.946-0.146-2.986-0.146h-1.015c-0.551 0-0.999-0.448-0.999-0.999v-6.002c0-0.551 0.448-0.999 0.999-0.999h1.001c1.045 0 2.043-0.055 3-0.149v8.295zM23 11.56v-7.56c0-0.404-0.243-0.769-0.617-0.924s-0.804-0.070-1.090 0.217c-0.058 0.057-5.828 5.707-16.293 5.712h-1.001c-1.653 0-2.999 1.345-2.999 2.999v0.001c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1v0.001c0 1.654 1.346 2.999 2.999 2.999h0.306l2.758 7.352c0.147 0.389 0.52 0.648 0.937 0.648h2c0.287 0 0.56-0.123 0.75-0.338 0.189-0.216 0.278-0.502 0.242-0.786l-0.798-6.387c7.151 1.369 11.051 5.166 11.097 5.211 0.191 0.193 0.448 0.295 0.709 0.295 0.129 0 0.258-0.024 0.382-0.075 0.374-0.155 0.618-0.52 0.618-0.925v-7.55c1.191-0.693 2-1.968 2-3.445s-0.809-2.752-2-3.445v0zM31 14.005h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM26.657 19.248c-0.391-0.391-1.024-0.391-1.414 0-0.391 0.39-0.391 1.023 0 1.414l2.121 2.121c0.39 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.121-2.121zM26.657 10.762l2.121-2.121c0.391-0.391 0.391-1.024 0-1.414-0.39-0.391-1.024-0.391-1.414 0l-2.121 2.121c-0.391 0.391-0.391 1.024 0 1.414 0.39 0.391 1.023 0.391 1.414 0v0z" />
                  </svg>
                </svg>
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
