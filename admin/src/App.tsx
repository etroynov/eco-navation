/**
 * Dependencies
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import Courses from './containers/courses';
import Pages from './containers/pages';
import Users from './containers/users';
import Blog from './containers/blog';
import Settings from './containers/settings';
import Organizations from './containers/organizations';
import CourseCreate from './containers/courses/create';

/**
 * Expo
 */

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pages" exact component={Pages} />
    <Route path="/users" exact component={Users} />
    <Route path="/courses" exact component={Courses} />
    <Route path="/courses" component={CourseCreate} />
    <Route path="/organizations" exact component={Organizations} />
    <Route path="/blog" exact component={Blog} />
    <Route path="/settings" exact component={Settings} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default App;
