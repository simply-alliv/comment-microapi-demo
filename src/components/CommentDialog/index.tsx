import React, { FunctionComponent, useContext } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Comment from "../Comment";
import { makeStyles } from "@material-ui/core/styles";
import { CommentsContext } from "../../context/comments";

const useStyles = makeStyles({
  button: {
    justifyContent: "flex-end",
  },
});

type CallBackFunction = () => void;
type CommentDialogProps = {
  isOpen?: boolean;
  handleClose: CallBackFunction;
  title?: string;
  subtitle?: string;
  okLabel?: string;
  cancelLabel?: string;
};

const CommentDialog: FunctionComponent<CommentDialogProps> = ({
  isOpen = false,
  handleClose,
  title = "Title",
  subtitle = "Subtitle",
  okLabel = "Ok",
  cancelLabel = "Cancel",
}) => {
  const state = useContext(CommentsContext)[0];
  const classes = useStyles();

  const getRepliesForComment = (commentId: string) => {
    return state.replies.filter((reply) => reply.commentId === commentId);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
        </DialogContent>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {state.comments.map((comment, index) => (
              <Box py={1} key={comment.commentId}>
                <Typography variant="h6">{`Comment ${index + 1}`}</Typography>
                <Box mb={1}></Box>
                <Comment
                  key={comment.commentId}
                  comment={comment}
                  replies={getRepliesForComment(comment.commentId)}
                />
              </Box>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box display="flex" flexDirection="column" width="100%">
            <Button
              className={classes.button}
              color="secondary"
              fullWidth={true}
              onClick={handleClose}
            >
              {okLabel}
            </Button>
            <Button
              className={classes.button}
              color="secondary"
              fullWidth={true}
              onClick={handleClose}
            >
              {cancelLabel}
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
