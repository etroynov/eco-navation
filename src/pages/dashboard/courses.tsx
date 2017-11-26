import * as React from 'react';
import Head from 'next/head';

/*!
 * Components
 */

import Header from '../../components/dashboard/common/Header';
import Footer from '../../components/dashboard/common/Footer';
import Sidebar from '../../components/dashboard/common/Sidebar';

/*!
 * Expo
 */

export default () => (
  <div className="page">
    <Head>
      <title>Курсы</title>
    </Head>
    <Sidebar />
    <div className="page__content">
      <div className="page__header-container">
        <Header />
      </div>
      <div>
        <ul uk-tab="true">
          <li className="uk-active">
            <a href="#">
              Профессии
              <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
              <span className="prof__counter">28</span>
            </a>
          </li>
          <li>
            <a href="#">
              Бесплатные интенсивы
              <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
              <span className="prof__counter">9</span>
            </a>
          </li>
          <li>
            <a href="#">
              Курсы
              <span className="prof__counter-point" style={{ margin: '0 10px' }}>•</span>
              <span className="prof__counter">85</span>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  </div>
);
