/*!
 * Vendor
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

/*!
 * Actions
 */

import { fetchCourses } from '../actions/coursesActions';
import { fetchSections } from '../actions/sectionsActions';

/*!
 * Components
 */

import Index from '../components/course/index';
import Show from '../components/course/show';

/*!
 * Expo
 */

const Courses = () => (
  <Switch>
    <Route exact path="/courses" component={Index} />
    <Route path="/courses/:id" component={Show} />
  </Switch>
);

export default compose(
  connect(null, { fetchSections, fetchCourses }),
  lifecycle({
    componentDidMount() {
      this.props.fetchSections();
      this.props.fetchCourses();
    },
  }),
)(Courses as any);

