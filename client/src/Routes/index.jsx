import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const FakeNav = () => {
  return (
    <div>
      <h3>Example of graphql protected routes and login via google</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/protectedroute">
            Protected Route: a link that should not allow users view unless
            logged in.
          </Link>
        </li>
        <li>
          <Link to="/publicroute">
            Public Route: allows anyone to access and see the query.{" "}
          </Link>
        </li>
        <li>
          <Link to="/protectedquery">
            Protected Query: a public link with protected query
          </Link>
        </li>
        <li>
          <Link to="/login">Login: google login to see all links</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

const Routes = () => {
  return (
    <Router>
      <FakeNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/protectedroute">
          <ProtectedRoute />
        </Route>
        <Route exact path="/protectedquery">
          <ProtectedRoute />
        </Route>
        <Route exact path="/publicroute">
          <PublicRoute />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;