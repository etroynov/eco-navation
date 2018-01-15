import * as React from 'react';
import Dashboard from '../../../components/dashboard/layout';
import { Col, Row, Steps, Button, Radio } from 'antd';
import Link from 'next/link';

const Step = Steps.Step;
const RadioGroup = Radio.Group;

class Course extends React.Component<{
  name: string;
  steps: any[];
}, {
  currentStep: number;
  chosenAnswer: number;
}> {
  state = {
    currentStep: 0,
    chosenAnswer: 0,
  };

  static getInitialProps = () => ({
    name: 'Тест по теме: Охрана труда',
    description: '',
    steps: [{
      id: 0,
      title: 'Вопрос 1' ,
      content: 'Что из перечисленного определяется как "обстановка на определенной территории, сложившаяся в результате аварии, опасного природного явления, катастрофы, стихийного или иного бедствия, которые могут повлечь или повлекли за собой человеческие жертвы, ущерб здоровью людей или окружающей среде, значительные материальные потери и нарушение условий жизнедеятельности людей"?',
      answers: [
        'Чрезвычайная ситуация',
        'Зона чрезвычайной ситуации',
        'Чрезвычайное происшествие',
      ],
      rightAnswer: 1,
    }, {
      id: 1,
      title: 'Вопрос 2' ,
      content: 'Что из перечисленного не входит в основные мероприятия, проводимые органами управления и силами единой системы предупреждения и ликвидации чрезвычайных ситуаций, в режиме чрезвычайной ситуации?',
      answers: [
        'Восполнение при необходимости резервов материальных ресурсов, созданных для ликвидации чрезвычайных ситуаций',
        'Непрерывный контроль за состоянием окружающей среды, мониторинг и прогнозирование развития возникших чрезвычайных ситуаций, а также оценка их социально-экономических последствий',
        'Проведение мероприятий по защите населения и территорий от чрезвычайных ситуаций',
        'Непрерывный сбор, анализ и обмен информацией об обстановке в зоне чрезвычайной ситуации и в ходе проведения работ по ее ликвидации',
        'Проведение мероприятий по жизнеобеспечению населения в чрезвычайной ситуации',
      ],
      rightAnswer: 0,
    }],
  })

  handleClickNext = () => {
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  }

  handleSelectAnswer = (e) => {
    this.setState({
      chosenAnswer: e.target.value,
    });
  }

  render() {
    const { name, steps } = this.props;
    const { currentStep, chosenAnswer } = this.state;

    const step = steps[currentStep];

    return (
      <Dashboard>
        <Row>
          <Col span={6} style={{ paddingRight: '20px' }}>
            <section
              style={{
                padding: '20px',
                background: '#ffffff',
              }}
            >
              <header
                style={{
                  marginBottom: '20px',
                  borderBottom: '1px solid #eeeeee',
                }}
              >
                <h3>{name}</h3>
              </header>
              <Steps direction="vertical" size="small" current={currentStep}>
                {steps.map(({ id, title }) => <Step key={id} title={title} />)}
              </Steps>
            </section>
          </Col>
          <Col span={18} style={{ paddingLeft: '20px' }}>
            <article
              style={{
                padding: '20px',
                background: '#ffffff',
              }}
            >
              <header style={{ marginBottom: '20px', textAlign: 'center', borderBottom: '1px solid #eeeeee' }}>
                <h2>
                  {step.title}
                </h2>
              </header>
              <section dangerouslySetInnerHTML={{ __html: step.content }} style={{
                textAlign: 'center',
              }} />
              <section className="answers" style={{
                  display: 'block',
                  padding: '20px',
                  textAlign: 'center',
                }}>
                <RadioGroup onChange={this.handleSelectAnswer} value={chosenAnswer} style={{ textAlign: 'left' }}>
                  {step.answers.map((answer, index) => <Radio key={index} style={{ display: 'block', marginBottom: '20px' }} value={index}>{answer}</Radio>)}
                </RadioGroup>
              </section>
              <footer style={{ overflow: 'hidden' }}>
                <hr style={{ border: 'none', borderBottom: '1px solid #eeeeee' }} />
                <Button type="primary" icon="arrow-right" onClick={this.handleClickNext} style={{ float: 'right' }}>Ответить</Button>
              </footer>
            </article>
          </Col>
        </Row>
      </Dashboard>
    );
  }
}

export default Course;
