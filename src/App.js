import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home/Home";
import Comments from "./Comments/Comments";
import Replies from "./Replies/Replies";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/replies">Replies</Link>
      </nav>

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
