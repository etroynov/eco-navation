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

import { fetchPosts } from '../actions/postsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/posts';
import Create from '../components/posts/create';
import Edit from '../components/posts/edit';

import { Header, Main, Title } from '../components/common';

/*!
 * Expo
 */

const Posts = ({ location: { pathname }, fetchPosts }) => {
  let title = '';

  useEffect(() => {fetchPosts()}, []);

  switch (pathname) {
    case '/posts/create':
      title = 'Новая Запись';
      break;

    default:
      title = 'Записи';
      break;
  }

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>
          {title}
          <Button type="primary" style={{ float: 'right', marginTop: 5 }}>
            <Link to="/posts/create">Добавить запись</Link>
          </Button>
        </Title>
      </Header>
      
      <Main>
        <Switch>
          <Route exact={true} path="/posts" component={Index} />
          <Route exact={true} path="/posts/create" component={Create} />
          <Route path="/posts/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default connect(
  null,
  { fetchPosts }
)(Posts);
