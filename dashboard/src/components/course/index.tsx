/*!
 * Vendor
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { compose, lifecycle } from 'recompose';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'antd';

/*!
 * Components
 */

import Dashboard from '../layout';

declare const require: any;

/*!
 * Expo
 */

const Index = ({ data, loaded }) => (
  <Dashboard title="Курсы">
    <header
      style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}
    >
      <h1 style={{ margin: 0 }}>Доступные курсы</h1>
    </header>
    <Row gutter={16}>
      {data.map(({ _id, name, content, price, duration }) => (
        <Col span={6}>
          <Link to={`/courses/${_id}`}>
            <Card title={name} className="uc-course-card">
              <img
                src={require('./../../assets/img/oot.svg')}
                alt="го и чс"
                className="uc-img-response"
              />
              <div style={{ padding: 20 }} dangerouslySetInnerHTML={{ __html: content.slice(0, 125) }} />
              <Row>
                <Col span={16}>
                  <p style={{ margin: 0, padding: 20, textAlign: 'center', fontSize: 24 }}>{price} / {duration} ч.</p>
                </Col>
                <Col span={8}>
                  <div style={{ padding: 20, textAlign: 'center' }}>
                    <Button type="primary">Купить</Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Link>
        </Col>
      )}
    </Row>
  </Dashboard>
);

const mapStateToProps = ({ courses: { data, loaded } }) => ({ data, loaded });

export default connect(
  mapStateToProps,
)(Index);
