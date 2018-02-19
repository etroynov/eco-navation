/*!
 * Vendor
 */

import React from "react";
import Link from "next/link";

import { Layout, Card, Row, Col } from "antd";

/*!
 * Components
 */

const { Meta } = Card;
const { Content } = Layout;

/*!
 * Expo
 */

const Posts = ({ posts }) => (
  <Content className="uc-container courses">
    <header className="courses__header">
      <h2 className="courses__title">Записи</h2>
    </header>

    <Row>
      {posts.map(({ _id, title, description, content, icon, slug }) => (
        <Col key={_id} span={6}>
          <Link as={`/posts/${slug}`} href={`/posts?slug=${slug}`}>
            <a>
              <Card
                hoverable
                cover={<img alt="example" src="https://image.freepik.com/vector-gratis/e-mail-de-noticias-suscripcion-promocion-plana-ilustracion-vectorial-diseno-newsletter-icon-plano_1200-330.jpg" />}
              >
                <Meta
                  title={title}
                  description={description}
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
