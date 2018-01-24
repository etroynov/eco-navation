/*!
 * Vendor
 */

import * as React from 'react';
import Link from 'next/link';
import { compose, lifecycle } from 'recompose';
import withRedux from 'next-redux-wrapper';
import { Col, Row } from 'antd';

/*!
 * Components
 */

import Site from '../components/layout';
import Sections from '../components/sections';
import Slider from '../components/slider';
import Works from '../components/works';
import Reviews from '../components/reviews';

/*!
 * Data
 */

import store from '../store';

/*!
 * Actions
 */

import { fetchCourses } from '../actions/coursesActions';
import { fetchPages } from '../actions/pagesActions';
import { fetchPosts } from '../actions/postsActions';
import { fetchSections } from '../actions/sectionsActions';
import { fetchSettings } from '../actions/settingsActions';

/*!
 * Expo
 */

const Home = () => (
  <Site>
    <Slider />
    <Sections />
    <Works />
    <Reviews />
  </Site>
);

export default compose(
  withRedux(store, null, {
    fetchCourses,
    fetchPages,
    fetchPosts,
    fetchSections,
    fetchSettings,
  }),

  lifecycle({
    componentDidMount() {
      this.props.fetchCourses();
      this.props.fetchPages();
      this.props.fetchPosts();
      this.props.fetchSections();
      this.props.fetchSettings();
    }
  }),
)(Home)
