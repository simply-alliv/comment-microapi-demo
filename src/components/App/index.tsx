import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/index";
import Comments from "../Comments/index";
import Replies from "../Replies/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/replies">
          <Replies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
