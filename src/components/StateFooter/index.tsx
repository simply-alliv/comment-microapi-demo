import React from "react";
import { Box, Button } from "@material-ui/core";
import CommentDialog from "../CommentDialog";

const StateFooter = () => {
  const [open, setOpen] = React.useState(false);

  const handleViewState = () => setOpen(true);

  const handleResetState = () => {};

  const handleClose = () => setOpen(false);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Button onClick={handleViewState}>View Current State</Button>
      <Button onClick={handleResetState}>Reset State</Button>
      <CommentDialog isOpen={open} handleClose={handleClose} />
    </Box>
  );
};

export default StateFooter;
