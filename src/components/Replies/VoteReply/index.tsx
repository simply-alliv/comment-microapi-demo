import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";
import { CommentsContext } from "../../../context/comments";
import { CommentsActionType } from "../../../common/enums";
import { Comment, Reply } from "../../../common/models";
import CommentSelect from "../../CommentSelect";
import ReplySelect from "../../ReplySelect";

const voteComponentEndpoints = [
  "PATCH /comments/:commentId/replies/:replyId/votes/upvote",
  "PATCH /comments/:commentId/replies/:replyId/votes/downvote",
];
const voteComponentHeading = "Vote on a reply";
const voteComponentSubtitle =
  "Was it a really good reply? Show your appreciation.";

const voteTypes = ["Upvote", "Downvote"];

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "grid",
  },
});

const VoteReply: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedComment, setSelectedComment] = useState(state.comments[0]);
  const [selectedReply, setSelectedReply] = useState<Reply>([][0]);
  const [selectedVoteType, setSelectedVoteType] = useState(voteTypes[0]);

  const classes = useStyles();

  const handleSelectedCommentChange = (comment: Comment) => {
    setSelectedComment(comment);
  };

  const handleSelectedReplyChange = (reply: Reply) => {
    setSelectedReply(reply);
  };

  const handleVoteSingleReplyClick = () => {
    const type =
      selectedVoteType === voteTypes[0]
        ? CommentsActionType.UPVOTE_REPLY
        : CommentsActionType.DOWNVOTE_REPLY;

    dispatch({
      type,
      payload: {
        commentId: selectedComment.commentId,
        replyId: selectedReply.replyId,
      },
    });
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={voteComponentEndpoints}
        heading={voteComponentHeading}
        subtitle={voteComponentSubtitle}
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
          Select a reply you'd like to vote on.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <ReplySelect
          state={state}
          selectedComment={selectedComment}
          onChange={handleSelectedReplyChange}
        ></ReplySelect>
      </Box>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select the vote type you'd like to make on the reply.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {voteTypes.map((voteType) => {
          return (
            <Grid className={classes.root} item xs={6} key={voteType}>
              <Button
                variant={
                  selectedVoteType === voteType ? "contained" : "outlined"
                }
                onClick={() => setSelectedVoteType(voteType)}
              >
                {voteType}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading || selectedReply?.replyId === undefined}
          onClick={handleVoteSingleReplyClick}
        >
          {state.loading
            ? "Please Wait..."
            : selectedReply?.replyId === undefined
            ? "No Reply"
            : selectedVoteType === voteTypes[0]
            ? "Upvote Reply"
            : "Downvote Reply"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default VoteReply;
