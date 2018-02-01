/**
 * Dependencies
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';

import Login from './containers/login';
import Home from './containers/home';
import Courses from './containers/courses';
import Payments from './containers/payments';
import Test from './containers/tests';
import Registration from './containers/registration';

/**
 * Expo
 */

class App extends React.Component<any, any> {
  componentWillMount() {
    const { auth } = this.props;

    if (!auth.isAuthenticated && location.pathname !== '/login') {
      location.pathname = '/login';
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/payments" component={Payments} />
        <Route path="/tests" component={Test} />
        <Route path="/login" component={Login} />
        <Route path="/registration" exact={true} component={Registration} />
      </Switch>
    );
  }
}

const mapDispatchToProps = ({ auth }) => ({ auth });

export default withRouter(connect(mapDispatchToProps)(App as any) as any);
