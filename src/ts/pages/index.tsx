/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../components/general/common/Header';
import Slider from '../components/general/home/widget/Slider';
import Courses from '../components/general/courses/List';
import Works from '../components/general/home/works/Works';
import Reviews from '../components/general/home/reviews/Reviews';
import Footer from '../components/general/common/Footer';

/*!
 * Data
 */


/*!
 * Data
 */

const category = {
  name: 'Наши курсы',
  description: 'Мы сгруппировали наши курсы по определенным направлениям. Для того что бы вам было удобно выбрать то что вам нужно.',
  items: [{
    name: 'Медицинское образование',
    img: '/static/img/badge-pen.svg',
    description: 'система подготовки медицинских кадров, обеспечивающая изучение специальных дисциплин, а также овладение необходимыми практическими навыками в сфере дополнительного профессионального образования.',
    href: '/courses/medicina'
  }, {
    name: 'Экологическое образование',
    img: '/static/img/badge-eco.svg',
    description: 'это непрерывный процесс обучения, направленный на усвоение, систематизацию знаний об окружающей среде, приобретение умений и навыков природоохранной деятельности и формирование общей экологической культуры Экология как система научных и учебных дисциплин должна стать одним из главных компонентов содержания образования в XXI веке.',
    href: '/courses/eco-study',
  }, {
    name: 'Промышленная безопасность',
    img: '/static/img/badge-elixir.svg',
    description: 'Требования промышленной безопасности — условия, запреты, ограничения и другие обязательные требования, содержащиеся в действующем законодательстве РФ. которые принимаются в установленном порядке и соблюдение которых обеспечивает промышленную безопасность.',
    href: '/courses/production-security',
  }, {
    name: 'Бизнес образование',
    img: '/static/img/badge-electives.svg',
    description: 'Традиционными дисциплинами в бизнес-образовательных программах, являются менеджмент, маркетинг, финансы, управление операциями, управление персоналом, управление информацией и др. Их углублённое изучение осуществляется при подготовке «функциональных менеджеров», а также при повышении квалификации по отдельным аспектам названных дисциплин.',
    href: '/courses/business-study'
  }, {
    name: 'Курсы личностного роста',
    img: '/static/img/badge-ruby.svg',
    description: 'Для тех, кто хочет влиять на аудиторию и вызывать симпатию. Используются как проверенные временем методики театральных вузов и школ телеведущих, так и новые методы В сфере бизнеса наши курсы в первую очередь полезны для: руководителей и директоров с целью построения эффективного общения с подчинёнными и партнёрами, лиц, занимающих руководящие должности: начальников отделов, топ-менеджеров.',
    href: '/courses/personal-study'
  }]
};

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <Slider key="slider" />,
  <Courses key="courses" {...category} />,
  <Works key="works" />,
  <Reviews key="reviews" />,
  <Footer key="footer" />,
];
