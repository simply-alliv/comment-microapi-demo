import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";
import CommentSelect from "../../CommentSelect";
import ReplySelect from "../../ReplySelect";
import { CommentsContext } from "../../../context/comments";
import { Comment, Reply } from "../../../common/models";
import { CommentsActionType } from "../../../common/enums";

const deleteComponentEndpoints = [
  "DELETE /comments/:commentId/replies/:replyId",
];
const deleteComponentHeading = "Delete a reply";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const DeleteReply: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedComment, setSelectedComment] = useState(state.comments[0]);
  const [selectedReply, setSelectedReply] = useState<Reply>([][0]);

  const handleSelectedCommentChange = (comment: Comment) => {
    setSelectedComment(comment);
  };

  const handleSelectedReplyChange = (reply: Reply) => {
    setSelectedReply(reply);
  };

  const handleDeleteSingleReplyClick = () => {
    dispatch({
      type: CommentsActionType.DELETE_REPLY,
      payload: {
        commentId: selectedComment.commentId,
        replyId: selectedReply.replyId,
      },
    });
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={deleteComponentEndpoints}
        heading={deleteComponentHeading}
        subtitle={deleteComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment to access for its replies.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <CommentSelect
          state={state}
          onChange={handleSelectedCommentChange}
        ></CommentSelect>
      </Box>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a reply you'd like to delete.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <ReplySelect
          state={state}
          selectedComment={selectedComment}
          onChange={handleSelectedReplyChange}
        ></ReplySelect>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading || selectedReply?.replyId === undefined}
          onClick={handleDeleteSingleReplyClick}
        >
          {state.loading
            ? "Please Wait..."
            : selectedReply?.replyId === undefined
            ? "No Reply"
            : "Delete Reply"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default DeleteReply;
