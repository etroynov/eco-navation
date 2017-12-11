/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Site from '../../components/site/layout';
import Container from '../../components/site/common/Container'

import { Row, Col } from 'antd';

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
} : {
  url: {
    query: {
      name: string;
      description: string;
      banner: string;
      duration: number;
      price: number;
    }
  }
}) => (
  <Site>
    <Container>
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

        <Row className="article__body">
          <Col span={18} className="article__content" style={{
            borderRight: '1px solid #eee'
          }}>
            <figure style={{
              textAlign: 'center'
            }}>
              <img src={banner} />
            </figure>
            <p>{description}</p>
          </Col>
          <Col span={6} className="article__properties">
            <ul style={{
              listStyle: 'none'
            }}>
              <li>Продолжительность: {duration} часов</li>
              <li>Цена: {price} р.</li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  </Site>
);
