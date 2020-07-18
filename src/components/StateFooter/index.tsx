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
  const dispatch = useContext(CommentsContext)[1];
  const [open, setOpen] = React.useState(false);

  const handleViewState = () => setOpen(true);

  const handleResetState = () => {
    dispatch({
      type: CommentsActionType.RESET_STATE,
    });
  };

  const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Button onClick={handleViewState}>View Current State</Button>
        <Button onClick={handleResetState}>Reset State</Button>
      </Box>
      <Box>
        <CommentDialog
          isOpen={open}
          handleClose={handleClose}
          title={"Current State"}
          subtitle={"The curent saved state of your comments."}
          okLabel={"Reset state"}
          cancelLabel={"Let me continue"}
        />
      </Box>
    </div>
  );
};

export default StateFooter;
