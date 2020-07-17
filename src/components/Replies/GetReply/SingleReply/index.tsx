import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";
import { CommentsContext } from "../../../../context/comments";
import { CommentsActionType } from "../../../../common/enums";
import { Comment, Reply } from "../../../../common/models";
import CommentSelect from "../../../CommentSelect";
import ReplySelect from "../../../ReplySelect";

const getSingleReplyEndpoint = ["GET /comments/:commentId/replies/:replyId"];
const getSingleReplyHeading = "GET a single reply";
const getSingleReplySubtitle = "Need to get a specific reply?";

const SingleReply: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedComment, setSelectedComment] = useState(state.comments[0]);
  const [selectedReply, setSelectedReply] = useState<Reply>([][0]);

  const handleSelectedCommentChange = (comment: Comment) => {
    setSelectedComment(comment);
  };

  const handleSelectedReplyChange = (reply: Reply) => {
    setSelectedReply(reply);
  };

  const handleGetSingleReplyClick = () => {
    dispatch({
      type: CommentsActionType.GET_REPLY,
      payload: {
        commentId: selectedComment.commentId,
        replyId: selectedReply.replyId,
      },
    });
  };

  return (
    <Box mt={12} mb={1}>
      <TabViewIntroSection
        endpoints={getSingleReplyEndpoint}
        heading={getSingleReplyHeading}
        subtitle={getSingleReplySubtitle}
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
          Select a reply you'd like to update.
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
          onClick={handleGetSingleReplyClick}
        >
          {state.loading
            ? "Please Wait..."
            : selectedReply?.replyId === undefined
            ? "No Reply"
            : "Get Reply"}
        </Button>
      </Box>
    </Box>
  );
};

export default SingleReply;
