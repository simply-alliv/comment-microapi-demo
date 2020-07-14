import React from "react";
import { Box, Button } from "@material-ui/core";

const StateFooter = () => {
  const handleViewState = (event: any) => {};

  const handleResetState = (event: any) => {};

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Button onClick={handleViewState}>View Current State</Button>
      <Button onClick={handleResetState}>Reset State</Button>
    </Box>
  );
};

export default StateFooter;
