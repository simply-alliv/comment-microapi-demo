import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";
import { CommentsContext } from "../../../context/comments";
import CommentSelect from "../../CommentSelect";
import ReplySelect from "../../ReplySelect";
import { Reply } from "../../../common/models";
import { CommentsActionType } from "../../../common/enums";

const flagComponentEndpoints = [
  "PATCH /comments/:commentId/replies/:replyId/flag",
];
const flagComponentHeading = "Flag a reply";
const flagComponentSubtitle = "Didn’t like a reply? Do something about it.";

const FlagReply: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedReply, setSelectedReply] = useState<Reply>([][0]);

  const handleSelectedReplyChange = (reply: Reply) => {
    setSelectedReply(reply);
  };

  const handleFlagSingleReplyClick = () => {
    if (state.selectedComment) {
      dispatch({
        type: CommentsActionType.FLAG_REPLY,
        payload: {
          commentId: state.selectedComment.commentId,
          replyId: selectedReply.replyId,
        },
      });
    }
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={flagComponentEndpoints}
        heading={flagComponentHeading}
        subtitle={flagComponentSubtitle}
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
          Select a reply you'd like to flag.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <ReplySelect
          state={state}
          selectedComment={state.selectedComment}
          onChange={handleSelectedReplyChange}
        ></ReplySelect>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={
            state.loading ||
            state.selectedComment === undefined ||
            selectedReply === undefined
          }
          onClick={handleFlagSingleReplyClick}
        >
          {state.loading
            ? "Please Wait..."
            : selectedReply?.replyId === undefined
            ? "No Reply"
            : "Flag Reply"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default FlagReply;
