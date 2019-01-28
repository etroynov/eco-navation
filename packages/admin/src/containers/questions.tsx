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
import Create from '../components/questions/create';
import Edit from '../components/questions/edit';

import { Header, Main, Title } from '../components/common';

/*!
 * Expo
 */

const Questions = ({ location: { pathname } }) => {
  let title = 'Новый вопрос';

  if (pathname.includes('edit')) {
    title = 'Редактирование вопроса';
  }

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>{title}</Title>
      </Header>

      <Main>
        <Switch>
          <Route
            exact={true}
            path="/questions/create/:course"
            component={Create}
          />
          <Route path="/questions/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default Questions;
