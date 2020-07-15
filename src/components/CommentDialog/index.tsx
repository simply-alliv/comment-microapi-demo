import React, { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Comment, { CommentProps } from "../Comment";

type CallBackFunction = () => void;
type CommentDialogProps = {
  isOpen?: boolean,
  comments?: CommentProps[],
  handleClose: CallBackFunction,
  title?: string,
  subtitle?: string,
  okLabel?: string,
  cancelLabel?: string,
}

const CommentDialog: FunctionComponent<CommentDialogProps> = ({
  isOpen = false,
  comments = [],
  handleClose,
  title = "Title",
  subtitle = "Subtitle",
  okLabel = "Ok",
  cancelLabel = "Cancel",
}) => {

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
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            {comments.map((item, index) => (
              <Comment key={index} {...item} />
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box display="flex" flexDirection="column">
            <Button color="secondary" onClick={handleClose}>{okLabel}</Button>
            <Button color="secondary" onClick={handleClose}>{cancelLabel}</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
