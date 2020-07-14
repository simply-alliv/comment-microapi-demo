import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../Home/index";
import CustomAppBar from "./CustomAppBar";
import CustomTabBar from "./CustomTabBar";
import Comments, { tabLabels as commentsTabLabels } from "../Comments/index";
import Replies, { tabLabels as repliesTabLabels } from "../Replies/index";
import theme from "../../theme";
import useCurrentRoute from "../../hooks/useCurrentRoute";
import { RoutePath } from "../../common/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const [commentsTabsValue, setCommentsTabsValue] = useState(0);
  const [repliesTabsValue, setRepliesTabsValue] = useState(0);

  const classes = useStyles();
  const currentRoute = useCurrentRoute();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <CustomAppBar currentRoute={currentRoute}>
          {currentRoute.path === RoutePath.Comments ||
          currentRoute.path === RoutePath.Replies ? (
            <CustomTabBar
              tabLabels={
                currentRoute.path === RoutePath.Comments
                  ? commentsTabLabels
                  : repliesTabLabels
              }
              tabValueState={
                currentRoute.path === RoutePath.Comments
                  ? [commentsTabsValue, setCommentsTabsValue]
                  : [repliesTabsValue, setRepliesTabsValue]
              }
            ></CustomTabBar>
          ) : (
            <React.Fragment></React.Fragment>
          )}
        </CustomAppBar>
        <Switch>
          <Route exact path={RoutePath.Home}>
            <Home />
          </Route>
          <Route path={RoutePath.Comments}>
            <Comments
              tabValueState={[commentsTabsValue, setCommentsTabsValue]}
            />
          </Route>
          <Route path={RoutePath.Replies}>
            <Replies tabValueState={[repliesTabsValue, setRepliesTabsValue]} />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
