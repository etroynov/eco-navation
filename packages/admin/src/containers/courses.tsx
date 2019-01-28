/*!
 * Vendor
 */

import React from 'react';
import Helmet from 'react-helmet';

import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/*!
 * Actions
 */

import { fetchCourses } from '../actions/coursesActions';
import { fetchSections } from '../actions/sectionsActions';

/*!
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/courses';
import Create from '../components/courses/create';
import Edit from '../components/courses/edit';

import { Header, Main, Title } from '../components/common';

/*!
 * Expo
 */

const Courses = ({ location: { pathname } }) => {
  const title = '';

  switch (pathname) {
    case '/courses/create':
      title = 'Новый курс';
      break;

    default:
      title = 'Курсы';
      break;
  }

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>
          {title}
          <Button type="primary" style={{ float: 'right', marginTop: 5 }}>
            <Link to="/courses/create">Добавить курс</Link>
          </Button>
        </Title>
      </Header>

      <Main>
        <Switch>
          <Route exact={true} path="/courses" component={Index} />
          <Route exact={true} path="/courses/create" component={Create} />
          <Route path="/courses/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default compose(
  connect(
    null,
    { fetchSections, fetchCourses }
  ),
  lifecycle<ICourseContainerProps, ICourseContainerState>({
    componentDidMount() {
      this.props.fetchSections();
      this.props.fetchCourses();
    },
  })
)(Courses as any);
