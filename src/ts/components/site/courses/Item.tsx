import * as React from 'react';
import Link from 'next/link';
import { Row, Col } from 'antd';

const Course = ({ href, img, banner, name, description, duration, price } : {href: string; img: string; banner: string; name: string; description: string; duration: number; price: number;}) => (
  <Col span={12}>
    <article className="course">
      <Link as={`/курс/${name}`} href={`/course?name=${name}&description=${description}&img=${img}&banner=${banner}&duration=${duration}&price=${price}`}>
        <a className="course__link">
          <Row>
            <Col span={6} className="left-column">
              <figure className="course__img-container">
                <img src={img} alt={name} className="course__img" width="100" height="100" />
              </figure>
            </Col>
            
            <Col span={18} className="right-column">
              <header className="course__header">
                <h3 className="course__title">{name}</h3>
              </header>
              <section className="course__body">
                <p className="course__text">{`${description.slice(0, 150)}...`}</p>
              </section>
            </Col>
          </Row>
        </a>
      </Link>
    </article>
  </Col>
);

export default Course;
