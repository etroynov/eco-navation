/*!
 * Vendor
 */

import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/*!
 * Pages
 */

import Login from '../pages/auth/login';
import Registration from '../pages/auth/registration';

/*!
 * Expo
 */

const Auth = () => (
  <Switch>
    <Route exact path="/auth" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/registration" component={Registration} />
  </Switch>
);

export default Auth;

