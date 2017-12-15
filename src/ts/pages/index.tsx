/*!
 * Dependencies
 */

import * as React from 'react';

import Link from 'next/link';
import { Layout, Col, Row } from 'antd';

const { Content } = Layout;

/**
 * Components
 */

import Site from '../components/site/layout';
import Container from '../components/site/common/Container';
import Slider from '../components/site/home/widget/Slider';
import Works from '../components/site/home/works/Works';
import Reviews from '../components/site/home/reviews/Reviews';


/*!
 * Data
 */

import courses from './../data/courses';

/*!
 * Expo
 */

export default () => (
  <Site>
    <Slider key="slider" />
    <Content className="courses">
      <Container>
        <header className="courses__header">
          <h2 className="courses__title">{courses.name}</h2>
          <p className="courses__description">{courses.description}</p>
        </header>

        <Row>
          {courses.items.map(item => (
            <Col span={12}>
              <article className="course">
                <Link href={item.href}>
                  <a className="course__link">
                    <Row>
                      <Col span={6} className="left-column">
                        <figure className="course__img-container">
                          <img src={item.img} alt={item.name} className="course__img" width="100" height="100" />
                        </figure>
                      </Col>
                      
                      <Col span={18} className="right-column">
                        <header className="course__header">
                          <h3 className="course__title">{item.name}</h3>
                        </header>
                        <section className="course__body">
                          <p className="course__text">{`${item.description.slice(0, 120)}...`}</p>
                        </section>
                      </Col>
                    </Row>
                  </a>
                </Link>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </Content>
    <Works key="works" />
    <img src="/static/img/specials.jpg" alt="" style={{ width: '100%' }}/>
    <Reviews key="reviews" />
  </Site>
);
