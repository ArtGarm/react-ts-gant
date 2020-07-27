import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Container from "../components/container";
import Graph from "../pages/Graph";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <Container />
          </Route>
          <Route path="/users">
            <div> users </div>
          </Route>
          <Route path="/">
            <Graph />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
