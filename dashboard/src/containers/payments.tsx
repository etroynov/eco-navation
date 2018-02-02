/*!
 * Vendor
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

/*!
 * Actions
 */

import { fetchPayment } from '../actions/paymentsActions';

/*!
 * Components
 */

import Dashboard from '../components/layout';

import Index from '../components/payments';

/*!
 * Expo
 */

const Courses = ({ location }) => (
  <Dashboard>
    <Helmet>
      <title>Платежи</title>
    </Helmet>
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff', border: '1px solid #eeeeee' }}>
      <h1 style={{ margin: 0 }}>Платежи</h1>
    </header>

    <section style={{ padding: 10, background: '#ffffff', border: '1px solid #eeeeee' }}>
      <Switch>
        <Route exact path="/payments" component={Index} />
      </Switch>
    </section>
  </Dashboard>
);

const mapStateToProps = ({ auth }) => ({ auth });

export default compose(
  connect(mapStateToProps, { fetchPayment }),
  lifecycle({
    componentDidMount() {
      this.props.fetchPayment(this.props.auth.user._id);
    },
  }),
)(Courses as any);
