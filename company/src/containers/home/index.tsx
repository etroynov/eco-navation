/**
 * Dependencies
 */

import * as React from 'react';
import Dashboard from './../../components/layout';
import { Row, Col, Card, List, Avatar, Button, Modal, Form, Icon, Input, Checkbox } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

declare const require;

/**
 * Data
 */

const options = [
  { label: 'го и чс', value: 'gochs' },
  { label: 'Обучение по охране труда', value: 'ohrana-truda' },
];

/**
 * Expo
 */

class Home extends React.Component<{
  form: any;
}, {}> {
  state = {
    visible: false,
    users: [
      {
        fio: 'Тройнов Евгений Александрович',
        positon: 'ИТ - специалист',
      },
      {
        fio: 'Кожевников Андрей Алексеевич',
        position: 'Директор',
      },
    ],
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { users } = this.state;

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        console.info(values);
        this.setState({
          users: [
            ...users,
            ...values,
          ],
        });

        console.info(this.state);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Dashboard>
        <header
          style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}
        >
          <h1 style={{ margin: 0 }}>Главная</h1>
        </header>
        <section
          style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}
        >
          <Row>
            <Col
              span={4}
              style={{ borderRight: '1px solid #eee' }}
            >
              <figure style={{ textAlign: 'center', paddingTop: '25px 0' }}>
                <img
                  src="http://ucavtor.ru/static/img/logo.png"
                  alt="го и чс"
                  className="uc-img-response"
                  style={{ width: '50%' }}
                />
                <figcaption style={{ fontSize: 20, padding: '20px 0' }}>УЦ "АВТОР"</figcaption>
              </figure>
            </Col>
            <Col
              span={12}
              style={{ borderRight: '1px solid #eee' }}
            >
              <div
                className="gutter-box"
                style={{ padding: '0 20px', textAlign: 'justify' }}
              >
                <p>
                  Наш учебный центр оказывает услуги в сфере дополнительного
                  профессионального образования и профессионального обучения в
                  различных профессиональных областях, сочетающие в себе элементы
                  классического образования и новейших образовательных решений и
                  технологий.
                </p>
                <p>
                  В Учебном центре существует собственная платформа дистанционного
                  обучения. Это позволяет нам быть гибкими и активно развивать
                  образовательный процесс. Дистанционное обучение дает возможность
                  получить качественное образование, не выходя из дома.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className="gutter-box" style={{ padding: '0 20px' }}>
                <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                  Контакты
                </h3>
                <ul>
                  <li><strong>Руководитель:</strong> директор Кожевников Андрей Алексеевич</li>
                  <li><strong>Адрес:</strong> 454080, г. Челябинск, пр-т Ленина 83, офис 510</li>
                  <li><strong>Телефон:</strong> 8-(904) 301-93-27</li>
                  <li><strong>Адрес электронной почты:</strong> avtorka@list.ru</li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr style={{ border: 'none', borderBottom: '1px solid #eee' }} />

          <Row>
            <Col span={8} style={{ padding: '20px', borderRight: '1px solid #eee' }}>
              <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                Сотрудники
                <hr style={{ width: '20%', border: 'none', borderBottom: '1px solid #eee' }} />
              </h2>
              <List
                itemLayout="horizontal"
                dataSource={this.state.users}
                renderItem={item => (
                  <List.Item actions={[<a>изменить</a>, <a>подробнее</a>]}>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={item.fio}
                      description={item.position}
                    />
                  </List.Item>
                )} />
                <hr style={{ border: 'none', borderBottom: '1px solid #eee' }} />
                <Button type="primary" style={{ float: 'right' }} onClick={this.showModal}>Добавить сотрудника</Button>
            </Col>
            <Col span={8} style={{ padding: '20px', borderRight: '1px solid #eee' }}>
              <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                Курсы
                <hr style={{ width: '20%', border: 'none', borderBottom: '1px solid #eee' }} />
                <Row gutter={16}>
                  <Col span={12}>
                    <Card className="uc-course-card">
                      <img
                        src={require('./../../assets/img/gochs.svg')}
                        alt="го и чс"
                        className="uc-img-response"
                      />
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card className="uc-course-card">
                      <img
                        src={require('./../../assets/img/oot.svg')}
                        alt="го и чс"
                        className="uc-img-response"
                      />
                    </Card>
                  </Col>
                </Row>
              </h2>
            </Col>
            <Col span={8} style={{ padding: '20px' }}>
              <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                События
                <hr style={{ width: '20%', border: 'none', borderBottom: '1px solid #eee' }} />
              </h2>
              <List
                itemLayout="horizontal"
                dataSource={this.state.users}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={`Добавлен сотрудник - ${item.fio}`}
                    />
                  </List.Item>
                )} />
            </Col>
          </Row>
        </section>

        <Modal
          title="Новый сотрудник"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem label="ФИО">
              {getFieldDecorator('fio', {
                rules: [{ required: true, message: 'Укажите имя!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Иванов Иван Иванович" />,
              )}
            </FormItem>
            <FormItem label="Должность">
              {getFieldDecorator('position', {
                rules: [{ required: true, message: 'Укажите должность!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Менеджер" />,
              )}
            </FormItem>
            <FormItem label="Адрес электроной почты">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Укажите адрес электроной почты!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="example@gmail.com" />,
              )}
            </FormItem>
            <FormItem label="Курсы">
              <hr style={{ borderBottom: '1px solid #eee' }} />
              <CheckboxGroup options={options} defaultValue={['Apple']} onChange={onChange} />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">Сохранить</Button>
            </FormItem>
          </Form>
        </Modal>
      </Dashboard>
    );
  }
}

const WrappedHome = Form.create()(Home);

export default WrappedHome;
