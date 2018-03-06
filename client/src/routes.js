import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Login from './modules/account/Login';

const Routes = props => (
  <Router history={props.history}>
    <Route path="/" component={Login} />
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;

