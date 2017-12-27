import * as React from 'react';
import Dashboard from '../../../components/dashboard/layout';
import { Button, Card, Col, Row } from 'antd';
import Link from 'next/link';

/*!
 * Expo
 */

export default () => (
  <Dashboard>
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
      <h1 style={{ margin: 0 }}>
        Доступные курсы
        <div className="buttons-panel" style={{ float: 'right' }}>
          <Link href="/dashboard/categories/create">
            <Button type="primary" style={{ marginRight: 15 }}>Добавить раздел</Button>
          </Link>
          <Link href="/dashboard/courses/create">
            <Button type="primary">Добавить курс</Button>
          </Link>
        </div>
      </h1>
    </header>
    <Row gutter={16}>
      <Col span={6}>
        <Link href="/dashboard/courses/gchs">
          <a>
            <Card title="Промышленая безопасность" className="uc-course-card">
              <img src="/static/img/gochs.svg" alt="го и чс" className="uc-img-response" />
            </Card>
          </a>
        </Link>
      </Col>
      <Col span={6}>
        <Link href="/dashboard/courses/ptm">
          <a>
            <Card title="Промышленая безопасность" className="uc-course-card">
              <img src="/static/img/ptm.svg" alt="го и чс" className="uc-img-response" />
            </Card>
          </a>
        </Link>
      </Col>
      <Col span={6}>
        <Link href="/dashboard/courses/trud">
          <a>
            <Card title="Промышленая безопасность" className="uc-course-card">
              <img src="/static/img/oot.svg" alt="го и чс" className="uc-img-response" />
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  </Dashboard>
);
