import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "../Home/index";
import Comments from "../Comments/index";
import Replies from "../Replies/index";
import { AppBar, Tab, Tabs } from '@material-ui/core';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Tabs value>
          <Tab label="Home" to="/" component={Link} />
          <Tab label="Comments" to="/comments" component={Link} />
          <Tab label="Replies" to="/replies" component={Link} />
        </Tabs>
      </AppBar>

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
