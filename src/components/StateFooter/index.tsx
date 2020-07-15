import React, { useContext } from "react";
import { Box, Button } from "@material-ui/core";
<<<<<<< HEAD
import CommentDialog from "../CommentDialog";

const StateFooter = () => {
  const [open, setOpen] = React.useState(false);

  const handleViewState = () => setOpen(true);

  const handleResetState = () => {};

  const handleClose = () => setOpen(false);
=======
import { CommentsContext } from "../../context/comments";
import { CommentsActionType } from "../../common/enums";

const StateFooter = () => {
  const [state, dispatch] = useContext(CommentsContext);

  console.log(state);

  const handleViewState = (event: any) => {};

  const handleResetState = (event: any) => {
    dispatch({
      type: CommentsActionType.RESET_STATE,
    });
  };
>>>>>>> upstream/develop

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Button onClick={handleViewState}>View Current State</Button>
      <Button onClick={handleResetState}>Reset State</Button>
      <CommentDialog isOpen={open} handleClose={handleClose} />
    </Box>
  );
};

export default StateFooter;
