/*!
 * Vendor
 */

import React from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';

/*!
 * Components
 */

const { Content } = Layout;

/*!
 * Expo
 */

const Sections = ({ sections }) => (
  <Content className="courses">
    <div className="uc-container">
      <header className="courses__header">
        <h2 className="courses__title">Наши курсы</h2>
        <p className="courses__description">Мы сгруппировали наши курсы по определенным направлениям. Для того, чтобы вам было удобно!</p>
      </header>

      <Row>
        {sections.data.map(({ name, content, icon, slug }) => (
          <Col span={12}>
            <article className="course">
              <Link as={`/courses/${slug}`}  href={`/courses?slug=${slug}`}>
                <a className="course__link">
                  <Row>
                    <Col span={6} className="left-column">
                      <figure className="course__img-container">
                        <img
                          src={icon}
                          alt={name}
                          className="course__img"
                          width="100"
                          height="100"
                        />
                      </figure>
                    </Col>

                    <Col span={18} className="right-column">
                      <header className="course__header">
                        <h3 className="course__title">{name}</h3>
                      </header>
                      <section className="course__body">
                        <p className="course__text" dangerouslySetInnerHTML={{__html: `${content.slice(0, 120)}...`}} />
                      </section>
                    </Col>
                  </Row>
                </a>
              </Link>
            </article>
          </Col>
        ))}
      </Row>
    </div>
  </Content>
);

const mapStateToProps = ({ sections }) => ({ sections });

export default connect(
  mapStateToProps,
)(Sections);