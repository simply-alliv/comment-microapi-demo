import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1000
  },
  button: {
    textTransform: "none"
  }
}));

const StateFooter = () => {
  const classes = useStyles();

  const handleViewState = (event: any) => {};

  const handleResetState = (event: any) => {};
  
  return (
      <Grid
        container
        className={classes.root}
        justify="space-between"
        alignItems="flex-end"
      >
        <Grid item>
          <Button className={classes.button} onClick={handleViewState}>
            View Current State
          </Button>
        </Grid>
        <Grid item>
          <Button className={classes.button} onClick={handleResetState}>
            Reset State
          </Button>
        </Grid>
    </Grid>
  );
};

export default StateFooter;
