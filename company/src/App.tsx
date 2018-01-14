/**
 * Dependencies
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import Users from './containers/users';
import UsersCreate from './containers/usersCreate';
import Registration from './containers/registration';

/**
 * Expo
 */

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/users" exact component={Users} />
    <Route path="/users/create" exact component={UsersCreate} />
    <Route path="/login" component={Login} />
    <Route path="/registration" exact component={Registration} />
  </Switch>
);

export default App;
