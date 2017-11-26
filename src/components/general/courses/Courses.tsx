import * as React from 'react';
import Course from './Course';

const Courses = () => (
  <div id="courses" className="courses uk-container">
    <header className="courses__header">
      <h2 className="courses__title">Наши курсы</h2>
      <p className="courses__description">Мы сгруппировали наши курсы по определенным направлениям. Для того что бы вам было удобно выбрать то что вам нужно.</p>
    </header>

    <div className="uk-flex uk-flex-between uk-flex-wrap">
      <Course href="/courses/medicina" img="/static/img/badge-pen.svg" name="Медицина" description="24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." />
      <Course href="/courses/eco-study" img="/static/img/badge-eco.svg" name="Экологическое образование" description="24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." />
      <Course href="/courses/production-security" img="/static/img/badge-elixir.svg" name="Промышленная безопасность" description="24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." />
      <Course href="/courses/business-study" img="/static/img/badge-electives.svg" name="Бизнес образование" description="24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." />
      <Course href="/courses/personal-study" img="/static/img/badge-ruby.svg" name="Курсы личностного роста" description="24 февраля 1870 года[19] Лев Николаевич Толстой задумал роман о частной жизни и отношениях современников, но к реализации своего замысла приступил лишь в феврале 1873 года." />
    </div>
  </div>
);

export default Courses;
