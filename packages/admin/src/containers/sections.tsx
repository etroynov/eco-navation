/**
 * Vendor
 */

import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/**
 * Actions
 */

import { fetchSections } from '../actions/sectionsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import { Header, Main, Title } from '../components/common';
import { Index, Create, Edit } from '../components/sections';

/*!
 * Expo
 */

const Sections = ({ location: { pathname } }) => {
  let title = 'Направления';

  if (pathname.includes('create')) {
    title = 'Новое направление';
  }

  useEffect(() => { fetchSections() }, []);

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>
          {title}
          <Button type="primary" style={{ float: 'right', marginTop: 5 }}>
            <Link to="/sections/create">Добавить раздел</Link>
          </Button>
        </Title>
      </Header>

      <Main>
        <Switch>
          <Route exact={true} path="/sections" component={Index} />
          <Route exact={true} path="/sections/create" component={Create} />
          <Route path="/sections/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default connect(
  null,
  { fetchSections }
)(Sections as any);
