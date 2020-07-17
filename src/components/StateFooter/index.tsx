import React, { useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { CommentsContext } from "../../context/comments";
import CommentDialog from "../CommentDialog";
import CommentsActionType from "../../common/enums/comments-action-type";
import { CommentProps } from "../Comment";

type StateFooterProps = {
  comments: CommentProps[];
};

const StateFooter = ({ comments }: StateFooterProps) => {
  const dispatch = useContext(CommentsContext)[0];
  const [open, setOpen] = React.useState(false);

  const handleViewState = () => setOpen(true);

  const handleResetState = () => {
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
        <CommentDialog
          isOpen={open}
          comments={comments}
          handleClose={handleClose}
          title={"Current State"}
          subtitle={"The curent saved state of your comments."}
          okLabel={"Reset state"}
          cancelLabel={"Let me continue"}
        />
      </Box>
    </React.Fragment>
  );
};

export default StateFooter;
