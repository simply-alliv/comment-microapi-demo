import React, { FunctionComponent, useContext } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";
import CommentSelect from "../../CommentSelect";
import ReplySelect from "../../ReplySelect";
import { CommentsContext } from "../../../context/comments";
import { CommentsActionType } from "../../../common/enums";

const deleteComponentEndpoints = [
  "DELETE /comments/:commentId/replies/:replyId",
];
const deleteComponentHeading = "Delete a reply";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const DeleteReply: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);

  const handleDeleteSingleReplyClick = () => {
    if (state.selectedComment && state.selectedReply) {
      dispatch({
        type: CommentsActionType.DELETE_REPLY,
        payload: {
          commentId: state.selectedComment.commentId,
          replyId: state.selectedReply.replyId,
        },
      });
    }
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
        <CommentSelect></CommentSelect>
      </Box>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a reply you'd like to delete.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <ReplySelect></ReplySelect>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={
            state.loading ||
            state.selectedComment === undefined ||
            state.selectedReply === undefined
          }
          onClick={handleDeleteSingleReplyClick}
        >
          {state.loading
            ? "Please Wait..."
            : state.selectedReply === undefined
            ? "No Reply"
            : "Delete Reply"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default DeleteReply;
