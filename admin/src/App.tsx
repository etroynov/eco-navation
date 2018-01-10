/**
 * Dependencies
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import Courses from './containers/courses';
import Organizations from './containers/organizations';
import CourseTrud from './containers/courses/trud';

/**
 * Expo
 */

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/courses" exact component={Courses} />
    <Route path="/courses" component={CourseTrud} />
    <Route path="/organizations" exact component={Organizations} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default App;
