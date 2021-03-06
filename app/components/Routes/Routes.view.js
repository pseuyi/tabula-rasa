'use strict';

import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import Main from '../Main';
import Room from '../Room';


export default () => (
  <Router history={ hashHistory }>
    <Route path="/" component={ Main } />
    <Route path="/room" component={ Room } />
  </Router>
);
