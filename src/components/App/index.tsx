import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "../Home/index";
import CustomAppBar from "./CustomAppBar";
import CustomTabBar from "./CustomTabBar";
import Comments from "../Comments/index";
import Replies from "../Replies/index";
import theme from "../../theme";
import useCurrentRoute from "../../hooks/useCurrentRoute";
import { CommentsContextProvider } from "../../context/comments";
import { RoutePath } from "../../common/enums";
import useCurrentTabs from "../../hooks/useCurrentTabs";
import useCurrentTabsValue from "../../hooks/useCurrentTabsValue";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const currentRoute = useCurrentRoute();
  const [currentTabsLabels, tabsAvailable] = useCurrentTabs(currentRoute);
  const tabValueState = useCurrentTabsValue(currentRoute);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <CustomAppBar currentRoute={currentRoute}>
          {tabsAvailable && (
            <CustomTabBar
              tabLabels={currentTabsLabels}
              tabValueState={tabValueState}
            ></CustomTabBar>
          )}
        </CustomAppBar>
        <CommentsContextProvider>
          <Switch>
            <Route exact path="/">
              <Redirect to={RoutePath.Home} />
            </Route>
            <Route exact path={RoutePath.Home}>
              <Home />
            </Route>
            <Route path={RoutePath.Comments}>
              <Comments tabValueState={tabValueState} />
            </Route>
            <Route path={RoutePath.Replies}>
              <Replies tabValueState={tabValueState} />
            </Route>
          </Switch>
        </CommentsContextProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
