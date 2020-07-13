import React, { FunctionComponent, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Routes } from "../index";

type CustomAppBarProps = {
  currentPageState: [any, React.Dispatch<React.SetStateAction<any>>];
  children?: React.ReactNode;
};

const CustomAppBar: FunctionComponent<CustomAppBarProps> = ({
  currentPageState,
  children,
}) => {
  let location = useLocation();

  useEffect(() => {
    currentPageState[1](location.pathname);
  });

  return (
    <AppBar position="relative" elevation={2}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Link component={RouterLink} to={Routes.Home}>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={() => currentPageState[1](Routes.Home)}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Box display="flex">
            <Link component={RouterLink} to={Routes.Comments}>
              <Button
                variant={
                  currentPageState[0] === Routes.Comments
                    ? "contained"
                    : "outlined"
                }
                color="secondary"
                onClick={() => currentPageState[1](Routes.Comments)}
              >
                Comments
              </Button>
            </Link>
            <Box mx={1}></Box>
            <Link component={RouterLink} to={Routes.Replies}>
              <Button
                variant={
                  currentPageState[0] === Routes.Replies
                    ? "contained"
                    : "outlined"
                }
                color="secondary"
                onClick={() => currentPageState[1](Routes.Replies)}
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
