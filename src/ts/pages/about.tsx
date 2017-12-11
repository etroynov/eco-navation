/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../components/site/common/Header';
import Article from '../components/site/home/article/Article';
import Footer from '../components/site/common/Footer';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <Article key="about" title="О компании" />,
  <Footer key="footer" />,
];
