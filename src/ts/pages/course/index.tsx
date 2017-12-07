/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/general/common/Header';
import List from '../../components/general/courses/List';
import Footer from '../../components/general/common/Footer';

/*!
 * Expo
 */

export default (props) => (
  <div>
    <Header key="header" />
    <div className="uk-container">
      <div className="article">
        <header className="article__header">
          <h1 className="article__title">{props.url.query.name}</h1>
        </header>

        <section className="article__body uk-flex">
          <section className="article__content uk-width-1-2">
            <img src="http://sunshinebaby.com.ua/wp-content/uploads/2013/10/medicina.jpg" />
            <img src="http://expert.ru/data/public/527534/527542/08-01c.jpg" />
            <img src="https://kit8.net/images/thumbnails/700/525/detailed/1/Medications_flat_vector_illustratioons.png" />
            <p>{props.url.query.description}</p>
          </section>
          <section className="article__properties uk-width-1-3">
            <ul style={{

            }}>
              <li>Продолжительность курса:</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </section>
      </div>
    </div>
    <Footer key="footer" />
  </div>
);