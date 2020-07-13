import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../Home/index";
import CustomAppBar from "./CustomAppBar";
import Comments from "../Comments/index";
import Replies from "../Replies/index";
import theme from "../../theme";

export enum Page {
  Home,
  Comments,
  Replies,
}

function App() {
  const [currentPage, setCurrentPage] = useState(Page.Home);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <CustomAppBar
          currentPageState={[currentPage, setCurrentPage]}
        ></CustomAppBar>
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
