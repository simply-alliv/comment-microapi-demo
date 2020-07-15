import React, { useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { CommentsContext } from "../../context/comments";
import CommentDialog from "../CommentDialog";
import CommentsActionType from "../../common/enums/comments-action-type";
import { CommentProps } from "../Comment";
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

const StateFooter = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [open, setOpen] = React.useState(false);

  console.log(state);

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
          comments={[comment]}
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
