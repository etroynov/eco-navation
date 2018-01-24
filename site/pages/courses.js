/*!
 * Dependencies
 */

import * as React from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';

import { compose, lifecycle } from 'recompose';
import { Row, Col } from 'antd';

/**
 * Components
 */

import Site from '../components/layout';
import Index from '../components/courses';


/*!
 * Data
 */

import store from '../store';

/*!
 * Actions
 */

import { fetchPages }    from '../actions/pagesActions';
import { fetchPosts }    from '../actions/postsActions';
import { fetchCourses }  from '../actions/coursesActions';
import { fetchSections } from '../actions/sectionsActions';
import { fetchSettings } from '../actions/settingsActions';

/*!
 * Expo
 */

const Courses = (props) => (
  <Site>
    <section className="courses">
      <Index />
    </section>
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
)(Courses);