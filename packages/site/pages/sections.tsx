/*!
 * Vendor
 */

import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

/*!
 * Components
 */

import Site from '../components/layout';
import Course from '../components/courses/Item';

/*!
 * Styles
 */

const Content = styled.section`
  margin: 5px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid transparent;
`;

const Devider = styled.hr`
  margin: 15px 5px;
`;

/*!
 * Expo
 */

const Section = ({ section: { name, content, courses }, settings }) => (
  <Site settings={settings}>
    <section className="courses">
      <div className="uc-container">
        <header className="courses__header">
          <h2 className="courses__title">{name}</h2>
          <p className="courses__description">Мы сгруппировали наши курсы по определенным направлениям. Для того, чтобы вам было удобно!</p>
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
        
        <Devider />

        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  </Site>
);

Section.getInitialProps = async ({ query }) => {
  try {
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
