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

export default ({
  url: {
    query: {
      name,
      description,
      banner,
      duration,
      price
    }
  }
}) => (
  <div>
    <Header key="header" />
    <div className="uk-container">
      <div className="article">
        <header className="article__header" style={{
          textAlign: 'center'
        }}>
          <h1 className="article__title">{name}</h1>
          <hr style={{
            width: '15%',
            margin: '30px auto',
            borderColor: '#999'
          }} />
        </header>

        <section className="article__body uk-flex">
          <section className="article__content uk-width-1-1" style={{
            borderRight: '1px solid #eee'
          }}>
            <figure style={{
              textAlign: 'center'
            }}>
              <img src={banner} />
            </figure>
            <p>{description}</p>
          </section>
          <section className="article__properties uk-width-1-3">
            <ul style={{
              listStyle: 'none'
            }}>
              <li>Продолжительность: {duration} часов</li>
              <li>Цена: {price} р.</li>
            </ul>
          </section>
        </section>
      </div>
    </div>
    <Footer key="footer" />
  </div>
);