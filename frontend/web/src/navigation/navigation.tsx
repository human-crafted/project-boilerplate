import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import * as screens from '../screens';

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Screen One</Link>
            </li>
            <li>
              <Link to="/screen-two">Screen Two</Link>
            </li>
            <li>
              <Link to="/screen-three">Screen Three</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/screen-three">
            <screens.Three />
          </Route>
          <Route path="/screen-two">
            <screens.Two />
          </Route>
          <Route path="/">
            <screens.One />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { Navigation };
