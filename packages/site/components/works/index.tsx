/*!
 * Vendor
 */

import React from 'react';
import { Row } from 'antd';

/**
 * Components
 */

import Step from './item';

/*!
 * Expo
 */

class Works extends React.Component {
  state = {
    steps: [{
      _id: 0,
      name: 'Обучение',
      description: 'Опытные, приветливые инструкторы проводят шаг за шагом по материалам курса в наших высококачественных видео уроках.',
      img: '../../static/img/work_step_1.svg',
      odd: true,
    }, {
      _id: 1,
      name: 'Практика',
      description: 'К каждому материалу подобран необходимый базис практического материла, который позволит более глубоко освоить предмет.',
      img: '../../static/img/work_step_2.svg',
      odd: false,
    }, {
      _id: 2,
      name: 'Тестирование',
      description: 'По окончанию курса, вас ждет интерактивное тестирование, в результате которого будет сформирован протокол правильных ответов.',
      img: '../../static/img/work_step_3.svg',
      odd: true,
    }, {
      _id: 3,
      name: 'Отслеживание прогресса',
      description: 'Личный кабинет позволит в режиме онлайн отслеживать прогресс обучения ученика.',
      img: '../../static/img/work_step_4.svg',
      odd: false,
    }],
  };

  render() {
    const { steps } = this.state;

    return (
      <div className="works">
        <header className="works__header">
          <h2 className="works__title">Как мы работаем</h2>
        </header>

        <Row className="steps">{steps.map(step => <Step key={step._id} {...step} />)}</Row>
      </div>
    );
  }
}

export default Works;
