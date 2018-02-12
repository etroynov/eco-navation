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
import Index from '../components/courses';

/*!
 * Expo
 */

const Courses = ({ settings }) => (
  <Site settings={settings}>
    <section className="courses">
      <Index />
    </section>
  </Site>
);

Courses.getInitialProps = async ({ query }) => {
  try {
    console.info(query);
    const [ sectionRes, settingsRes ] = await Promise.all([
      axios.get(`http://localhost:8081/sections/${query.slug}`),
      axios.get('http://localhost:8081/settings'),
    ]);
    
    let settings = {};

    if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
      settingsRes.data.forEach(({ value, slug }) => settings[slug] = value );
    }

    console.info(sectionRes);

    return {
      settings,
      page: sectionRes.data,
    };
  } catch (e) {
    console.info(e);
    return {};
  }
}

export default Courses;
