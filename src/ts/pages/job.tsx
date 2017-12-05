/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../components/general/common/Header';
import Footer from '../components/general/common/Footer';

/*!
 * Expo
 */

const Content = () => (
  <div className="uk-container">
    <div className="article">
      <header className="article__header">
        <h1 className="article__title">Работа</h1>
      </header>

      <section className="article__body">
        <p>Раздел находится в стадии наполнения.</p>
      </section>
    </div>
  </div>
);

export default () => [
  <Header key="header" />,
  <Content />,
  <Footer key="footer" />,
];
