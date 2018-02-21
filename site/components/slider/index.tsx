/*!
 * Vendor
 */

import * as React from 'react';
import Link from 'next/link';

import { withState } from 'recompose';
import { Button } from 'antd';

/*!
 * Components
 */

import LeaveRquest from '../leaveRequest';

/*!
 * Expo
 */

const Slider = ({ visilble, showLeaveRequest }) => (
  <div className="slider">
    <div className="uk-container">
      <section className="slider__item">
        <header className="slider__header">
          <h4 className="slider__title">Учебный центр "Автор"</h4>
        </header>
        <section className="slider__body">
          <p className="slider__text">Дополнительное профессиональное образование</p>
        </section>
        <section className="slider__control">
          <Link href="/registration">
            <Button size="large" type="primary" className="slider__button">регистрация</Button>
          </Link>
          <LeaveRquest visilble={visilble} />
        </section>
      </section>
    </div>
  </div>
);

export default withState('visible', 'showLeaveRquest', false)(Slider);
