import React, { FunctionComponent, useContext } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";
import CommentSelect from "../../../CommentSelect";
import { CommentsContext } from "../../../../context/comments";
import { CommentsActionType } from "../../../../common/enums";

const getSingleCommentEndpoint = ["GET /comments/commentId"];
const getSingleCommentHeading = "GET single comments";
const getSingleCommentSubtitle = "Need to get just one comment?";

const SingleComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);

  const handleGetSingleCommentsClick = () => {
    if (state.selectedComment) {
      dispatch({
        type: CommentsActionType.GET_COMMENT,
        payload: { commentId: state.selectedComment.commentId },
      });
    }
  };

  return (
    <Box mt={12} mb={1}>
      <TabViewIntroSection
        endpoints={getSingleCommentEndpoint}
        heading={getSingleCommentHeading}
        subtitle={getSingleCommentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment that you'd like to get.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <CommentSelect></CommentSelect>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading}
          onClick={handleGetSingleCommentsClick}
        >
          {state.loading ? "Please Wait..." : "Get Comment"}
        </Button>
      </Box>
    </Box>
  );
};

export default SingleComment;
