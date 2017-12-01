/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../components/general/common/Header';
import Slider from '../components/general/home/widget/Slider';
import Courses from '../components/general/courses/Courses';
import Works from '../components/general/home/works/Works';
import Reviews from '../components/general/home/reviews/Reviews';
import Footer from '../components/general/common/Footer';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <Slider key="slider" />,
  <Courses key="courses" />,
  <Works key="works" />,
  <Reviews key="reviews" />,
  <Footer key="footer" />,
];
