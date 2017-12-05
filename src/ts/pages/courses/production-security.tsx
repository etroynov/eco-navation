/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/general/common/Header';
import Footer from '../../components/general/common/Footer';
import List from '../../components/general/courses/List';

/*!
 * Data
 */

const category = {
  name: 'Промышленная безопасность',
  description: 'Мы сгруппировали наши курсы по определенным направлениям. Для того что бы вам было удобно выбрать то что вам нужно.',
  items: [{
    name: 'Профессиональная подготовка на право работы с отходами I-IV классов опасности',
    img: '/static/img/badge-elixir.svg',
    description: '',
    href: '/courses/production-security'
  }, {
    name: 'Обеспечение экологической безопасности руководителями и специалистами экологических служб и систем экологического контроля',
    img: '/static/img/badge-elixir.svg',
    description: '',
    href: '/courses/production-security'
  }, {
    name: 'Обеспечение экологической безопасности при работах в области обращения с отходами I-IV классов опасности',
    img: '/static/img/badge-elixir.svg',
    description: '.',
    href: '/courses/production-security'
  }, {
    name: 'Обучение по охране труда',
    img: '/static/img/badge-elixir.svg',
    description: '.',
    href: '/courses/production-security'
  }, {
    name: 'Обучение по ГО и ЧС',
    img: '/static/img/badge-elixir.svg',
    description: '.',
    href: '/courses/production-security'
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
