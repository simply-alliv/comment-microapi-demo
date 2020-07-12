import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../Home/index";
import Comments from "../Comments/index";
import Replies from "../Replies/index";
import theme from "../../theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
