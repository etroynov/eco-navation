/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/site/common/Header';
import Footer from '../../components/site/common/Footer';
import List from '../../components/site/courses/List';

/*!
 * Data
 */

import eco from './../../data/eco';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <List key="list" {...eco} />,
  <Footer key="footer" />,
];
