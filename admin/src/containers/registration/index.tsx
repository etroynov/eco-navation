/**
 * Dependencies
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card, Row, Col } from 'antd';

declare const require: any;

/*!
 * Expo
 */

const { Content } = Layout;

export default () => (
  <Content style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: 490, height: 340 }}>
    <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Зарегистрироватся как:</h2>
    <Row type="flex" justify="space-between">
      <Col>
        <Link to="/registration/personal">
          <Card
            hoverable={true}
            title="абитуриент"
            style={{ width: 240, textAlign: 'center', textTransform: 'uppercase' }}
            cover={<img alt="example" src={require('./../../assets/img/whitecollar.svg')} style={{ padding: 20 }}  />}
          />
        </Link>
      </Col>
      <Col>
        <Link to="/registration/company">
          <Card
            hoverable={true}
            title="компания"
            style={{ width: 240, textAlign: 'center', textTransform: 'uppercase' }}
            cover={<img alt="example" src={require('./../../assets/img/briefcase.svg')} style={{ padding: 20 }} />}
          />
        </Link>
      </Col>
    </Row>
  </Content>
);
