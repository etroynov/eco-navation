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
  </Switch>
);

export default App;
