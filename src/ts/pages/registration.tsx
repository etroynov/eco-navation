/**
 * Dependencies
 */

import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

/**
 * Components
 */

import Header from '../components/dashboard/common/Header';
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
      <title>Регистрация</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Sidebar />
    <div className="page__content">
      <div className="page__header-container">
        <Header /> 
      </div>
       <div className="login-box uk-flex uk-flex-center" style={{ padding: '100px 0' }}>
          <form action="" className="login-form uk-width-1-4">
            <div className="uk-margin">
              <label className="uk-form-label">ФИО</label>
              <div className="uk-form-controls">
                <input type="text" className="uk-input" placeholder="Иванов Иван Иванович" />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">ТЕЛЕФОН</label>
              <div className="uk-form-controls">
                <input type="text" className="uk-input" placeholder="+7 (XXX) XXX-XX-XX" />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">E-MAIL</label>
              <div className="uk-form-controls">
                <input type="text" className="uk-input" placeholder="example@mail.com" />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">КОМПАНИЯ</label>
              <div className="uk-form-controls">
                <input type="text" className="uk-input" placeholder="УЦ `АВТОР`" />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">ПАРОЛЬ</label>
              <div className="uk-form-controls">
                <input type="password" className="uk-input" />
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">ПАРОЛЬ ЕЩЁ РАЗ </label>
              <div className="uk-form-controls">
                <input type="password" className="uk-input" />
              </div>
            </div>
            <div className="uk-margin">
              <Link href="/dashboard">
                <input type="submit" className="uk-button uk-button-primary uk-width-1-1" value="зарегистрироваться" />
              </Link>
            </div>
          </form>
        </div>
        <Footer />
    </div>
  </div>
);
