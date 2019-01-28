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

import { fetchOrganizations } from '../actions/organizationsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/organizations';
import Show from '../components/organizations/show';
import Edit from '../components/organizations/edit';

import { Header, Main, Title } from '../components/common';

/*!
 * Expo
 */

const Organizations = ({ location: { pathname } }) => {
  let title = '';

  switch (pathname) {
    case '/organizations/create':
      title = 'Новая организация';
      break;

    default:
      title = 'Организации';
      break;
  }

  useEffect(() => {fetchOrganizations()}, []);

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
          <Route exact={true} path="/organizations" component={Index} />
          <Route path="/organizations/show/:id" component={Show} />
          <Route path="/organizations/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default connect(
  null,
  { fetchOrganizations }
)(Organizations);
