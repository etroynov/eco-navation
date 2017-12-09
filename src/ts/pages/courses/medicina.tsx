/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/general/common/Header';
import List from '../../components/general/courses/List';
import Footer from '../../components/general/common/Footer';

/*!
 * Data
 */

import { medicina } from '../../data';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <List key="list" {...medicina} />,
  <Footer key="footer" />,
];
