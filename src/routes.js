import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
        <Route
          path="/repos/:repository/issues?state=:state"
          component={Repository}
        />
      </Switch>
    </BrowserRouter>
  );
}
