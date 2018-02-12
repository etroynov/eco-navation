/*!
 * Vendor
 */

import axios from 'axios';
import * as React from 'react';
import { Row, Col } from 'antd';

/**
 * Components
 */

import Site from '../components/layout';
import Course from '../components/courses/Item';

/*!
 * Expo
 */

const Section = ({ section: { name, content, courses }, settings }) => (
  <Site settings={settings}>
    <section className="courses">
      <div className="uc-container">
        <header className="courses__header">
          <h2 className="courses__title">{name}</h2>
          <p className="courses__disclamer">Мы сгруппировали наши курсы по определенным направлениям. Для того что бы вам было удобно выбрать то что вам нужно.</p>
          {/* <div className="tags-cloud">
            {tagsCloud.map(({ name, slug }, index) => (
              <CheckableTag
                key={index}
                className="tags-cloud__item"
                checked={selectedTags.includes(slug)}
                onChange={checked => this.handleChange(slug, checked)}
              >
                {name}
              </CheckableTag>
            ))}
          </div> */}
        </header>
        <Row>
          {courses.map((item, index) => <Course key={index} {...item} />)}
        </Row>
        
        <section className="courses__content" dangerouslySetInnerHTML={{__html: content }} />
      </div>
    </section>
  </Site>
);

Section.getInitialProps = async ({ query }) => {
  try {
    console.info(query);
    const [sectionRes, settingsRes] = await Promise.all([
      axios.get(`http://api.ucavtor.ru/sections/${query.slug}`),
      axios.get('http://api.ucavtor.ru/settings'),
    ]);
    
    const settings = {};

    if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
      settingsRes.data.forEach(({ value, slug }) => settings[slug] = value );
    }

    return {
      settings,
      section: sectionRes.data,
    };
  } catch (e) {
    return {};
  }
};

export default Section;
