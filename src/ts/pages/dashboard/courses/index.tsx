import * as React from 'react';
import Dashboard from '../../../components/dashboard/layout';
import { Card, Col, Row } from 'antd';
import Link from 'next/link';

/*!
 * Expo
 */

export default () => (
  <Dashboard>
    <Row gutter={16}>
      <Col span={8}>
        <Link href="/dashboard/courses/obuchenie">
          <a><Card title="Промышленая безопасность">Обучение по охране труда</Card></a>
        </Link>
      </Col>
      <Col span={8}>
        <Link href="/dashboard/courses/gchs">
          <a><Card title="Промышленая безопасность">Обучение по ГО и ЧС</Card></a>
        </Link>
      </Col>
      <Col span={8}>
        <Link href="/dashboard/courses/ptm">
          <a><Card title="Промышленая безопасность">ПТМ</Card></a>
        </Link>
      </Col>
    </Row>
  </Dashboard>
);
