import React, { FunctionComponent } from "react";
import { Box, CircularProgress } from "@material-ui/core";

const LoadingScreen: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="50vh"
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default LoadingScreen;
