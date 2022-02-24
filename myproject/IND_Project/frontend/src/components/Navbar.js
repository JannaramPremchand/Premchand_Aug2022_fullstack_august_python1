
import Signin from './Signin'
import Signup from './Signup'
import Home from './Home';
import React from "react";
import { Switch } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

function Navbar() {
  return (
    <>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/signin">
            <signin />
          </Route>
          <Route path="/signup">
            <signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </>
  )
}

export default Navbar