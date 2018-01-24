/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Site from '../components/layout';

/*!
 * Expo
 */

const Content = () => (
  <section>
    <div className="article">
      <header className="article__header">
        <h1 className="article__title">Работа</h1>
      </header>

      <section className="article__body">
        <p>Раздел находится в стадии наполнения.</p>
      </section>
    </div>
  </section>
);

export default () => (
  <Site>
    <Content />
  </Site>
);
