import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

const Page = ({ match }) => (
  <div>
    <h2>{match.params.page} Page</h2>
    <p>This is the content for {match.params.page} page.</p>
  </div>
);

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:page" component={Page} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
