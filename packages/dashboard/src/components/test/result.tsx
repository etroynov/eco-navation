/*!
 * Vendor
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Icon } from 'antd';

/*!
 * Compnonents
 */

import Dashboard from '../layout';

/*!
 * Expo
 */

class TestResult extends React.Component<{
  name: string;
  questions: any[];
  userAnswers: number[];
  rightAnswersCount: number;
}, {}> {
  render() {
    const { name, questions, rightAnswersCount, userAnswers  } = this.props;

    return (
      <Dashboard>
        <section style={{ padding: 20, background: '#ffffff' }}>
            <header
              style={{
                padding: 20,
                textAlign: 'center',
                fontSize: 24,
                borderBottom: '1px solid #eeeeee',
                background: rightAnswersCount > 9 ? 'green' : 'red',
              }}
            >
              <h3 style={{ margin: 0, color: '#fff' }}>
                {`Тест по курсу - ${name} - ( ${rightAnswersCount > 9 ? 'пройден' : 'не пройден'} )`}
              </h3>
            </header>

            <section style={{ overflow: 'hidden' }}>
              <Table
                pagination={false}
                dataSource={questions}
                columns={
                  [{
                    title: 'Вопрос',
                    dataIndex: 'question',
                    key: 'question',
                  }, {
                    title: 'Ответ',
                    key: 'answer',
                    align: 'center',
                    width: 200,
                    render: (text, record, index) =>
                      record.rightAnswer === userAnswers[index]
                        ? <Icon type="check-circle" style={{ color: 'green' }} />
                        : <Icon type="close-circle" style={{ color: 'red' }} />,
                  }]
                }
              />
              <div style={{ float: 'right', padding: '20px 0' }}>
                <Button type="primary" icon="printer" style={{ marginRight: 10 }} onClick={() => window.print()}>Распечатать результат</Button>
                <Button type="primary" icon="check"><Link to="/courses" style={{ color: '#fff' }}>завершить</Link></Button>
              </div>
            </section>
          </section>
      </Dashboard>
    );
  }
}

export default TestResult;
