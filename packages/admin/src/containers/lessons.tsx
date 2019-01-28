/**
 * Vendor
 */

import React from 'react';
import Helmet from 'react-helmet';

import { Switch, Route } from 'react-router-dom';

/**
 * Components
 */

import Dashboard from '../components/layout';
import Create from '../components/lessons/create';
import Edit from '../components/lessons/edit';

import { Header, Main, Title } from '../components/common';

/*!
 * Expo
 */

const Lessons = ({ location }) => (
  <Dashboard>
    <Helmet>
      <title>
        {location.pathname.split('/').includes('edit')
          ? 'Редактирование урока'
          : 'Новый урок'}
      </title>
    </Helmet>
    <Header>
      <Title>
        {location.pathname.split('/').includes('edit')
          ? 'Редактирование урока'
          : 'Новый урок'}
      </Title>
    </Header>

    <Main>
      <Switch>
        <Route exact={true} path="/lessons/create/:course" component={Create} />
        <Route path="/lessons/edit/:id" component={Edit} />
      </Switch>
    </Main>
  </Dashboard>
);

export default Lessons;
