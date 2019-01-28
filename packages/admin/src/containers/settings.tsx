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

import { fetchSettings } from '../actions/settingsActions';

/**
 * Components
 */

import Dashboard from '../components/layout';

import { Header, Main, Title } from '../components/common';
import { Index, Create, Edit } from '../components/settings';

/*!
 * Expo
 */

const Settings: React.FunctionComponent<any> = ({
  location: { pathname },
  fetchSettings,
}) => {
  let title = 'Настройки';

  if (pathname.includes('create')) {
    title = 'Новый параметр';
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <Dashboard>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header>
        <Title>
          {title}
          <Button type="primary" style={{ float: 'right', marginTop: 5 }}>
            <Link to="/settings/create">Добавить параметр</Link>
          </Button>
        </Title>
      </Header>

      <Main>
        <Switch>
          <Route exact={true} path="/settings" component={Index} />
          <Route exact={true} path="/settings/create" component={Create} />
          <Route path="/settings/edit/:id" component={Edit} />
        </Switch>
      </Main>
    </Dashboard>
  );
};

export default connect(
  null,
  { fetchSettings }
)(Settings as any);
