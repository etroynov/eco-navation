import * as React from 'react';
import Step from './Step';

const Works = () => (
  <div className="works">
    <div className="uk-container">
      <header className="works__header">
        <h2 className="works__title">Как мы работаем</h2>
      </header>

      <div className="steps">
        <Step
          name="Обучение"
          description="Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках."
          img="../../static/img/work_step_1.svg"
        />

        <Step
          name="Практика"
          description="Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках."
          img="../../static/img/work_step_2.svg"
        />

        <Step
          name="Тестирование"
          description="Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках."
          img="../../static/img/work_step_3.svg"
        />

        <Step
          name="Отслеживание прогресса"
          description="Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках."
          img="../../static/img/work_step_4.svg"
        />
      </div>
    </div>
  </div>
);

export default Works;
