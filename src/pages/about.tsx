/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../components/general/common/Header';
import Article from '../components/general/home/article/Article';
import Footer from '../components/general/common/Footer';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <Article key="about" title="О компании" />,
  <Footer key="footer" />,
];
