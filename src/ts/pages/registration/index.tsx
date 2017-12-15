/**
 * Dependencies
 */

import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Layout, Card, Row, Col } from 'antd';

/*!
 * Expo
 */

const { Content } = Layout;

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/css/vendor.min.css"/>
    </Head>
    <Content style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: 490, height: 340 }}>
      <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Зарегистрироватся как:</h2>
      <Row type="flex" justify="space-between">
        <Col>
          <Link href="/registration/personal">
            <a>
              <Card
                hoverable={true}
                title="абитуриент"
                style={{ width: 240, textAlign: 'center', textTransform: 'uppercase' }}
                cover={<img alt="example" src="http://www.pvhc.net/img240/uyttxprhsqycyximpzjb.png" style={{ padding: 20 }}  />}
              />
            </a>
          </Link>
        </Col>
        <Col>
          <Link href="/registration/company">
            <a>
              <Card
                hoverable={true}
                title="компания"
                style={{ width: 240, textAlign: 'center', textTransform: 'uppercase' }}
                cover={<img alt="example" src="https://www.annieandre.com/wp-content/uploads/2017/10/briefcase-work-job.png" style={{ padding: 20 }} />}
              />
            </a>
          </Link>
        </Col>
      </Row>
    </Content>
  </div>
);
