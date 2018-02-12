/*!
 * Vendor
 */

import axios from 'axios';
import * as React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';

/*!
 * Components
 */

import Site from '../components/layout';
import Sections from '../components/sections';
import Slider from '../components/slider';
import Works from '../components/works';
import Reviews from '../components/reviews';
import Banner from '../components/banner';

/*!
 * Expo
 */

const Home = ({ sections, settings }) => (
  <Site settings={settings}>
    <Slider />
    <Sections sections={sections} />
    <Works />
    <Banner settings={settings} />
    <Reviews />
  </Site>
);

Home.getInitialProps = async () => {
  const [ sectionsRes, settingsRes ] = await Promise.all([
    axios.get('http://api.ucavtor.ru/sections'),
    axios.get('http://api.ucavtor.ru/settings'),
  ]);

  let settings = {};

  if (Array.isArray(settingsRes.data) && !!settingsRes.data.length) {
    settingsRes.data.forEach(({ value, slug }) => settings[slug] = value );
  }

  return {
    settings,
    sections: sectionsRes.data,
  };
}

export default Home;
