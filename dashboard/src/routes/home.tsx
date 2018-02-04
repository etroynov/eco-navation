/*!
 * Vendor
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

/*!
 * Pages
 */

import Index from '../pages/home';

/*!
 * Expo
 */

const Home = () => (
  <Switch>
    <Route exact path="/" component={Index} />
  </Switch>
);

export default Home;

