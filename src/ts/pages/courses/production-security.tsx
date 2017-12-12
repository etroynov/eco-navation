/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/site/common/Header';
import Footer from '../../components/site/common/Footer';
import List from '../../components/site/courses/List';

/*!
 * Data
 */

const category = {
  name: 'Промышленная безопасность',
  description: 'Мы сгруппировали наши курсы по определенным направлениям. Для того что бы вам было удобно выбрать то что вам нужно.',
  items: [{
    id: 0,
    name: 'Обучение по охране труда',
    img: '/static/img/badge-elixir.svg',
    description: '.',
    href: '/courses/production-security',
    duration: 72,
    price: 2200
  }, {
    id: 1,
    name: 'Обучение по ГО и ЧС',
    img: '/static/img/badge-elixir.svg',
    description: '.',
    href: '/courses/production-security',
    duration: 72,
    price: 2800
  }]
}

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <List key="list" {...category} />,
  <Footer key="footer" />,
];
