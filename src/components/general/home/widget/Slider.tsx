import * as React from 'react';
import Link from 'next/link';

const Slider = () => (
  <div className="slider">
    <div className="uk-container">
      <section className="slider__item">
        <header className="slider__header">
          <h4 className="slider__title">Обучение. Практика. Сертифицирование.</h4>
        </header>
        <section className="slider__body">
          <p className="slider__text">Интерактивное учебное задание для начинающих и повышающих квалификацию</p>
        </section>
        <section className="slider__control">
          <Link href="/registration">
            <a className="uk-button uk-button-default uk-button-secondary uk-button-large">регистрация</a>
          </Link>
          <Link href="/courses">
            <a className="uk-button uk-button-default uk-button-primary uk-button-large">наши курсы</a>
          </Link>
        </section>
      </section>
    </div>
  </div>
);

export default Slider;
