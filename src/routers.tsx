import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import the containers as a page
import { Home } from "./container/Home/Home";
import { Posts } from "./container/Post/Posts";

export const RootRouter = () => {
  return (
    <div className="router">
      <Router basename="/">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/passengers" render={() => <Posts />} />
        </Switch>
      </Router>
    </div>
  );
};
