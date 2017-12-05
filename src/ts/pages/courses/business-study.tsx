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
  name: 'Бизнес образование',
  description: 'Мы сгруппировали наши курсы по определенным направлениям. Для того что бы вам было удобно выбрать то что вам нужно.',
  items: [{
    name: 'Кадровое делопроизводство',
    img: '/static/img/badge-electives.svg',
    description: 'этот курс предназначен тем, кто хочет с нуля освоить профессию «Инспектора по кадрам». Занятия помогут действующим кадровикам систематизировать свои знания. Материалы курса обеспечат качественное ведение кадрового документооборота компании, согласно требованиям и нормам трудового законодательства России. Каждое занятие содержит практическую часть.',
    href: '/courses/business-study'
  }, {
    name: 'Подбор и адаптация персонала',
    img: '/static/img/badge-electives.svg',
    description: 'важная составляющая в работе HR менеджеров компании. Это ответственная задача привлечения квалифицированных специалистов, чтобы делать это уверенно и хорошо, пройдите обучающий курс «Менеджер по подбору и адаптации персонала». С помощью занятий вы научитесь качественно подбирать специалистов вашей компании.',
    href: '/courses/business-study'
  }, {
    name: 'Кадровый менеджмент',
    img: '/static/img/badge-electives.svg',
    description: 'Состоит из двух блоков. Первый рассматривает вопросы подбора, адаптации, мотивации персонала, корпоративной культуры, конфликтов в коллективе, социально-психологического климата в компании. Второй —  кадровое делопроизводство. Полученная информация позволит HR-менеджерам выполнять работу качественно и быстро, не тратя время на поиск информации в интернете, книгах или у коллег.',
    href: '/courses/business-study'
  }, {
    name: 'Технологии продаж',
    img: '/static/img/badge-electives.svg',
    description: 'Как убедить клиента приобрести товар или услугу именно у вас? Что сделать, чтобы он пришел к вам снова? Подобные вопросы задает себе каждый специалист в области продаж. Сфера сбыта постоянно меняется, подстраиваясь под нужды потребителей и требования рынка.',
    href: '/courses/business-study'
  }, {
    name: 'Франчайзинг',
    img: '/static/img/badge-electives.svg',
    description: '',
    href: '/courses/business-study'
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
