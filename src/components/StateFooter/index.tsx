import React, { useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { CommentsContext } from "../../context/comments";
import CommentDialog from "../CommentDialog";
import CommentsActionType from "../../common/enums/comments-action-type";

const StateFooter = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [open, setOpen] = React.useState(false);

  console.log(state);

  const handleViewState = () => setOpen(true);

  const handleResetState = (event: any) => {
    dispatch({
      type: CommentsActionType.RESET_STATE,
    });
  };

  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Button onClick={handleViewState}>View Current State</Button>
        <Button onClick={handleResetState}>Reset State</Button>
      </Box>
      <Box>
        <CommentDialog isOpen={open} handleClose={handleClose} />
      </Box>
    </React.Fragment>
  );
};

export default StateFooter;
