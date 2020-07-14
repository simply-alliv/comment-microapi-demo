import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../Home/index";
import CustomAppBar from "./CustomAppBar";
import CustomTabBar from "./CustomTabBar";
import Comments, { tabLabels as commentsTabLabels } from "../Comments/index";
import Replies, { tabLabels as repliesTabLabels } from "../Replies/index";
import theme from "../../theme";

export enum Routes {
  Home = "/",
  Comments = "/comments",
  Replies = "/replies",
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const [currentPage, setCurrentPage] = useState(Routes.Home);
  const [commentsTabsValue, setCommentsTabsValue] = React.useState(0);
  const [repliesTabsValue, setRepliesTabsValue] = React.useState(0);

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Router>
          <CustomAppBar currentPageState={[currentPage, setCurrentPage]}>
            {currentPage === Routes.Comments ||
            currentPage === Routes.Replies ? (
              <CustomTabBar
                tabLabels={
                  currentPage === Routes.Comments
                    ? commentsTabLabels
                    : repliesTabLabels
                }
                tabValueState={
                  currentPage === Routes.Comments
                    ? [commentsTabsValue, setCommentsTabsValue]
                    : [repliesTabsValue, setRepliesTabsValue]
                }
              ></CustomTabBar>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </CustomAppBar>
          <Switch>
            <Route exact path={Routes.Home}>
              <Home currentPageState={[currentPage, setCurrentPage]} />
            </Route>
            <Route path={Routes.Comments}>
              <Comments
                tabValueState={[commentsTabsValue, setCommentsTabsValue]}
              />
            </Route>
            <Route path={Routes.Replies}>
              <Replies
                tabValueState={[repliesTabsValue, setRepliesTabsValue]}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
