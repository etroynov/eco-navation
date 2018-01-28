/**
 * Vendor
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/**
 * Components
 */

import Dashboard from '../components/layout';
import Create from '../components/lessons/create';

/*!
 * Expo
 */

const Courses = ({ location }) => (
  <Dashboard>
    <Helmet>
      <title>Новый урок</title>
    </Helmet>
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff', border: '1px solid #eeeeee' }}>
      <h1 style={{ margin: 0 }}>Новый урок</h1>
    </header>

    <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
      <Switch>
        <Route exact path="/lessons/create/:course" component={Create} />
      </Switch>
    </section>
  </Dashboard>
);

export default Courses;
