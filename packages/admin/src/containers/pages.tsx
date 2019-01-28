/**
 * Vendor
 */

import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { Button } from 'antd';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

/**
 * Actions
 */

import { fetchPages } from '../actions/pagesActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/pages';
import Create from '../components/pages/create';
import Edit from '../components/pages/edit';

import { Header, Main, Title } from '../components/common';

/*!
 * Expo
 */

const Pages = ({ location: { pathname }, fetchPages }) => {
  let title = '';

  switch (pathname) {
    case '/pages/create':
      title = 'Новая страница';
      break;

    default:
      title = 'Страницы';
      break;
  }
  
  useEffect(() => { fetchPages() }, []);

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>
          {title}
          <Button type="primary" style={{ float: 'right', marginTop: 5 }}>
            <Link to="/pages/create">Добавить страницу</Link>
          </Button>
        </Title>
      </Header>

      <Main>
        <Switch>
          <Route exact={true} path="/pages" component={Index} />
          <Route exact={true} path="/pages/create" component={Create} />
          <Route path="/pages/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default connect(
  null,
  { fetchPages }
)(Pages);
