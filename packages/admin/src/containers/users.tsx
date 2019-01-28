/**
 * Vendor
 */

import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

/**
 * Actions
 */

import { fetchUsers } from '../actions/usersActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/users';
import Edit from '../components/users/edit';

import { Header, Main, Title } from '../components/common';

/*!
 * Expo
 */

const Users = ({ location: { pathname }, fetchUsers }) => {
  let title = 'Пользователи';

  if (pathname.includes('create')) {
    title = 'Новый пользователь';
  }

  useEffect(() => {
    fetchUsers();
  }, []);

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
          <Route exact={true} path="/users" component={Index} />
          <Route path="/users/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default connect(
  null,
  { fetchUsers }
)(Users as any);
