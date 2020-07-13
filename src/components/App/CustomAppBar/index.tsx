import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Page } from "../index";

type CustomAppBarProps = {
  currentPageState: [any, React.Dispatch<React.SetStateAction<any>>];
};

const CustomAppBar: FunctionComponent<CustomAppBarProps> = ({
  currentPageState,
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Link component={RouterLink} to="/">
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={() => currentPageState[1](Page.Home)}
            >
              <HomeIcon />
            </IconButton>
          </Link>
          <Box display="flex">
            <Link component={RouterLink} to="/comments">
              <Button
                variant={
                  currentPageState[0] === Page.Comments
                    ? "contained"
                    : "outlined"
                }
                color="secondary"
                onClick={() => currentPageState[1](Page.Comments)}
              >
                Comments
              </Button>
            </Link>
            <Box mx={1}></Box>
            <Link component={RouterLink} to="/replies">
              <Button
                variant={
                  currentPageState[0] === Page.Replies
                    ? "contained"
                    : "outlined"
                }
                color="secondary"
                onClick={() => currentPageState[1](Page.Replies)}
              >
                Replies
              </Button>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
