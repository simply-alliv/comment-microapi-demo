import React, { useContext } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import { CommentsContext } from "../../context/comments";
import CommentDialog from "../CommentDialog";
import CommentsActionType from "../../common/enums/comments-action-type";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    zIndex: 100,
    backgroundImage:
      "linear-gradient(to top, rgba(35, 57, 255, 0.5) 10%, rgba(0, 0, 0, 0.3)) 90%",
  },
});

const StateFooter = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [open, setOpen] = React.useState(false);

  const handleViewState = () => setOpen(true);

  const handleResetState = () => {
    dispatch({
      type: CommentsActionType.RESET_STATE,
    });
  };

  const handleOk = () => {
    if (state.isSelectedCommentDialogOpen) {
      dispatch({
        type: CommentsActionType.SET_SELECTED_COMMENT_DIALOG_OPEN,
        payload: { isOpen: false },
      });
    }
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Button onClick={handleViewState}>View Current State</Button>
        <Button onClick={handleResetState}>Reset State</Button>
      </Box>
      <Box>
        <CommentDialog
          isOpen={open || state.isSelectedCommentDialogOpen}
          handleOk={handleOk}
          title={"Current State"}
          subtitle={
            state.isSelectedCommentDialogOpen
              ? "The current state of your selected comment and its replies."
              : "The curent state of your comments and replies."
          }
          okLabel={"Go back"}
        />
      </Box>
    </div>
  );
};

export default StateFooter;
