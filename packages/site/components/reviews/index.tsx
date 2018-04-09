/*!
 * Vendor
 */

import * as React from 'react';
import Review from './Review';

import { Row, Col } from 'antd';

/*!
 * initialState
 */

const advantages = [{
  id: 0,
  img: 'https://image.flaticon.com/icons/svg/237/237374.svg',
  content: 'Обучение через систему Олимпокс',
}, {
  id: 1,
  img: 'https://image.flaticon.com/icons/svg/724/724298.svg',
  content: 'Участник программы непрерывного медицинского фармацевтического образования',
}, {
  id: 2,
  img: 'https://image.flaticon.com/icons/svg/306/306451.svg',
  content: 'Конструктор курсов',
}, {
  id: 3,
  img: 'http://www.kameleon.pics/img/tile-presenter.svg',
  content: 'Личный кабинет руководителя',
}];

/*!
 * Components
 */

import Block from '../common/Block';
import Container from '../common/Container';

/*!
 * Expo
 */

const Reviews = () => (
  <Block background="#fff">
    <Container>
      <header className="reviews__header">
        <h2 className="reviews__title">Наши преимущества</h2>
      </header>

      <section className="reviews__body">
        <Row>
          {advantages.map(({ id, img, content }) => <Col span={6}><Review key={id} avatar={img} name={content} /></Col>)}
        </Row>
      </section>
    </Container>
  </Block>
);

export default Reviews;
