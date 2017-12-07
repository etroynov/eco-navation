/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/general/common/Header';
import List from '../../components/general/courses/List';
import Footer from '../../components/general/common/Footer';

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
    description: 'Это непрерывный процесс обучения, направленный на усвоение, систематизацию знаний об окружающей среде, приобретение умений и навыков природоохранной деятельности и формирование общей экологической культуры Экология как система научных и учебных дисциплин должна стать одним из главных компонентов содержания образования в XXI веке.',
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
  }, {
    name: 'Педагогика',
    img: '/static/img/badge-ruby.svg',
    description: 'Данный курс находится в стадии разработки и скоро будет доступен.'
    href: '/'
  }]
};

/*!
 * Expo
 */

export default () => (
  <div>
    <Header key="header" />
    <div className="courses uk-container">
      <header className="courses__header">
        <h2 className="courses__title">{category.name}</h2>
        <p className="courses__description">{category.description}</p>
      </header>

      <div className="uk-flex uk-flex-between uk-flex-wrap">
      {category.items.map(item => (
           <article className="course">
            <Link href={item.href}>
              <a className="course__link">
                <div className="uk-flex">
                  <div className="left-column uk-width-1-4">
                    <figure className="course__img-container">
                      <img src={item.img} alt={item.name} className="course__img" width="100" height="100" />
                    </figure>
                  </div>
                  
                  <div className="right-column uk-width-1-1">
                    <header className="course__header">
                      <h3 className="course__title">{item.name}</h3>
                    </header>
                    <section className="course__body">
                      <p className="course__text">{item.description}</p>
                    </section>
                  </div>
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </div>
    <Footer key="footer" />
  </div>
);
