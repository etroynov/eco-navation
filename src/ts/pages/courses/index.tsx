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
 * Expo
 */

export default () => [
  <Header key="header" />,
  <List key="list" />,
  <Footer key="footer" />,
];
