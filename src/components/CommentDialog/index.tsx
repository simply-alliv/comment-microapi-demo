import React, { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Comment, { CommentProps } from "../Comment";
import { ReplyProps } from "../Comment/Reply";

const replies: ReplyProps[] = [
  {
    name: "Mary A",
    content:
      "Good morning James. That’s right. I will see you then at the Cocoa Wah Wah.",
    creationDate: new Date(Date.parse("2020-07-13T21:40:00")),
  },
];

const comment: CommentProps = {
  name: "James James",
  content: `Hey, I hope that you are well. I was just looking to confirm our
  meeting for 10am sharp this morning. Please get back to me as soon
  as you get this.`,
  creationDate: new Date(Date.parse("2020-07-13T18:40:00")),
  replies,
};
type CallBackFunction = () => void;
type ScrollDialogProps = {
  isOpen?: boolean,
  comments?: CommentProps[],
  handleClose: CallBackFunction,
}

const CommentDialog: FunctionComponent<ScrollDialogProps> = ({
  isOpen = false,
  comments = [comment],
  handleClose,
}) => {

  const descriptionElementRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Current State</DialogTitle>
        <DialogContent>
          <DialogContentText>The curent saved state of your comments.</DialogContentText>
        </DialogContent>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {comments.map(item => <Comment {...item} />)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Reset state
          </Button>
          <Button onClick={handleClose}>
            Let me continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
