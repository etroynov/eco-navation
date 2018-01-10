/**
 * Dependencies
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import Courses from './containers/courses';
import CourseTrud from './containers/courses/trud';
import Registration from './containers/registration';
import CompanyRegistration from './containers/registration/company';
import PersonalRegistration from './containers/registration/personal';

/**
 * Expo
 */

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/courses" exact component={Courses} />
    <Route path="/courses" component={CourseTrud} />
    <Route path="/login" component={Login} />
    <Route path="/registration" exact component={Registration} />
    <Route path="/registration/company" exact component={CompanyRegistration} />
    <Route path="/registration/personal" exact component={PersonalRegistration} />
  </Switch>
);

export default App;
