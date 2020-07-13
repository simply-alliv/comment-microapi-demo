import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const StateFooter = () => {
  const classes = useStyles();

  const handleViewState = (event: any) => {};

  const handleResetState = (event: any) => {};
  
  return (
    <Box className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Button onClick={handleViewState}>
          View Current State
        </Button>
        <Button onClick={handleResetState}>
          Reset State
        </Button>
      </Box>
    </Box>
  );
};

export default StateFooter;
