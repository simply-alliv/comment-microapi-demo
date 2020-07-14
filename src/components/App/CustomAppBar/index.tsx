import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Route } from "../../../common/models";
import { RoutePath } from "../../../common/enums";

type CustomAppBarProps = {
  currentRoute: Route;
  children?: React.ReactNode;
};

const CustomAppBar: FunctionComponent<CustomAppBarProps> = ({
  currentRoute,
  children,
}) => {
  const getButtonVariant = (path: RoutePath) => {
    return currentRoute.path === path ? "contained" : "outlined";
  };

  return (
    <AppBar position="relative" elevation={2}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Link component={RouterLink} to={RoutePath.Home}>
            <IconButton edge="start" aria-label="menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <Box display="flex">
            <Link component={RouterLink} to={RoutePath.Comments}>
              <Button
                variant={getButtonVariant(RoutePath.Comments)}
                color="secondary"
              >
                Comments
              </Button>
            </Link>
            <Box mx={1}></Box>
            <Link component={RouterLink} to={RoutePath.Replies}>
              <Button
                variant={getButtonVariant(RoutePath.Replies)}
                color="secondary"
              >
                Replies
              </Button>
            </Link>
          </Box>
        </Box>
      </Toolbar>
      {children}
    </AppBar>
  );
};

export default CustomAppBar;
