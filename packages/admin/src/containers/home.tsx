/*!
 * Vendor
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Row, Col, List, Avatar } from 'antd';

/*!
 * Components
 */

import Dashboard from '../components/layout';
import { Header, Title, Main } from '../components/common';

/**
 * Data
 */

const releaseNotes: ReadonlyArray<any> = [
  {
    title: 'Исправление ошибок авторизации',
  },
  {
    title:
      'Добавлена валидация поле email при создании/редактировании пользователя',
  },
];

/*!
 * Expo
 */

const Home: React.FunctionComponent = ({ users }) => (
  <Dashboard>
    <Helmet>
      <title>Панель управления</title>
    </Helmet>

    <Header>
      <Title>Главная</Title>
    </Header>

    <section>
      <Row>
        <Col span={8}>
          <Main>
            <header>
              <Title>Последние изменения</Title>
            </header>
            <List
              itemLayout="horizontal"
              dataSource={releaseNotes}
              renderItem={({ title }) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://www.ok-serrurier.com/wp-content/uploads/2016/08/icone-plombier-ile-france.png" />
                    }
                    title={title}
                  />
                </List.Item>
              )}
            />
          </Main>
        </Col>
      </Row>
    </section>
  </Dashboard>
);

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Home);
