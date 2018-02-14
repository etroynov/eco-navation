/*!
 * Vendor
 */

import axios from 'axios';
import * as React from 'react';
import { Row, Col, Button, Icon } from 'antd';

/*!
 * Components
 */

import Site from '../components/layout';

/*!
 * Expo
 */

const Course = ({ course: { title, description, name, content, thumb, duration, price }, settings }) => (
  <Site title={title} description={description} settings={settings}>
    <section className="uc-container">
      <div className="article">
        <header className="article__header" style={{ textAlign: 'center' }}>
          <h1 className="article__title">{name}</h1>
          <hr style={{ width: '15%', margin: '30px auto', borderColor: '#999' }} />
        </header>
         <Row className="article__body">
          <Col span={18} className="article__content" style={{ borderRight: '1px solid #eee' }}>
            <figure className="article__img-container">
              <img src={thumb} style={{ maxWidth: 800, width: '100%' }} />
            </figure>
            <section dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
          <Col span={6} className="article__properties">
            <ul className="params" style={{ listStyle: 'none' }}>
              <li className="params__item">
                <Icon type="clock-circle-o" className="params__icon" />
                <span className="params__text">{duration} ч.</span>
              </li>
              <li className="params__item">
                <Icon type="shopping-cart" className="params__icon" />
                <span className="params__text">{price} руб.</span>
              </li>
            </ul>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary" size="large" href="/login" style={{ width: '100%', margin: '0 20px' }}>Заказать</Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  </Site>
);

Course.getInitialProps = async ({ query }) => {
  try {
    const [courseRes, settingsRes] = await Promise.all([
      axios.get(`http://api.ucavtor.ru/courses/${query.id}`),
      axios.get('http://api.ucavtor.ru/settings'),
    ]);
    
    const settings = {};

    if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
      settingsRes.data.forEach(({ value, slug }) => settings[slug] = value);
    }

    return {
      settings,
      course: courseRes.data,
    };
  } catch (e) {
    return {};
  }
};

export default Course;
