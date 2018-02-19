/*!
 * Vendor
 */

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Layout, Card, Row, Col } from 'antd';

/*!
 * Components
 */

const { Meta } = Card;
const { Content } = Layout;

const Header = styled.header`
  margin-bottom: 40px;
  text-align: center;
`;

/*!
 * Expo
 */

const Posts = ({ posts }) => (
  <Content className="uc-container courses">
    <Header>
      <h2 className="courses__title">Записи</h2>
    </Header>

    <Row gutter={12}>
      {posts.map(({ _id, title, description, slug }) => (
        <Col key={_id} span={6}>
          <Link as={`/posts/${slug}`} href={`/posts?id=${_id}`}>
            <a>
              <Card
                hoverable
                cover={<img alt={title} src="https://image.freepik.com/vector-gratis/e-mail-de-noticias-suscripcion-promocion-plana-ilustracion-vectorial-diseno-newsletter-icon-plano_1200-330.jpg" />}
              >
                <Meta
                  title={title}
                  description={`${description.slice(0, 70)}...`}
                />
              </Card>
            </a>
          </Link>
        </Col>
      ))}
    </Row>
  </Content>
);

export default Posts;
