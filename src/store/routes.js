import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';

import App from '../containers/App';
import AboutPage from '../containers/AboutPage';
import HomePage from '../containers/HomePage';

export default (
  <Router path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="/about" component={ AboutPage }/>
  </Router>
);
