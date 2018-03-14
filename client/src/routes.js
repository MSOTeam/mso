import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router';

// import { ConnectedRouter } from 'react-router-redux';
// import Login from './modules/account/Login';

import { account, main } from './modules';

const Routes = props => (
  <Router history={props.history}>
    <Switch>
      <Route exact path="/" component={main.Main} />
      <Route path="/login" component={account.Login} />
      <Route path="/register" component={account.Register} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
