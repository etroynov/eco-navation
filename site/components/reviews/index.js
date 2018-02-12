import * as React from 'react';
import Review from './Review';

import { Row, Col } from 'antd';

/*!
 * Expo
 */

export default () => (
  <div className="reviews" style={{ background: '#fff' }}>
    <div className="uc-container">
      <header className="reviews__header">
        <h2 className="reviews__title">Наши преимущества</h2>
      </header>

      <section className="reviews__body">
        <Row>
          <Col span={6}>
            <Review avatar="https://image.flaticon.com/icons/svg/237/237374.svg" name="Обучение через систему Олимпокс" />
          </Col>
          <Col span={6}>
            <Review avatar="https://image.flaticon.com/icons/svg/724/724298.svg" name="Участник программы непрерывного медицинского фармацевтического образования" />
          </Col>
          <Col span={6}>
            <Review avatar="https://image.flaticon.com/icons/svg/306/306451.svg" name="Конструктор курсов" />
          </Col>
          <Col span={6}>
            <Review avatar="http://www.kameleon.pics/img/tile-presenter.svg" name="Личный кабинет руководителя" />
          </Col>
        </Row>
      </section>
    </div>
  </div>
);
