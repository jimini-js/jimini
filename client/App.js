import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Home from './components/Home.js';
import Main from './components/Main.js';
import Profile from './components/Profile.js';
import PublicProfile from './components/PublicProfile.js';

render((
  <Router>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='wishlist' component={Profile} />
      <Route path='wishlist/:username' component={PublicProfile} />
    </Route>
  </Router>
), document.getElementById('app'));
