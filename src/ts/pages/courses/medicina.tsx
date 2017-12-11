/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/site/common/Header';
import List from '../../components/site/courses/List';
import Footer from '../../components/site/common/Footer';

/*!
 * Data
 */

import medicina from '../../data/medicina';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <List key="list" {...medicina} />,
  <Footer key="footer" />,
];
