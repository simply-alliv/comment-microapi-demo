import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";
import { CommentsContext } from "../../../../context/comments";
import { CommentsActionType } from "../../../../common/enums";

const getSingleCommentEndpoint = ["GET /comments/commentId"];
const getSingleCommentHeading = "GET single comments";
const getSingleCommentSubtitle = "Need to get just one comment?";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
  },
}));

const SingleComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedCommentId, setSelectedCommentId] = useState(
    state.comments[0].commentId
  );

  const classes = useStyles();

  const handleGetSingleCommentsClick = () => {
    dispatch({
      type: CommentsActionType.GET_COMMENT,
      payload: { commentId: selectedCommentId },
    });
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
      <Grid container spacing={2}>
        {state.comments.slice(0, 4).map((comment) => (
          <Grid
            className={classes.root}
            item
            xs={6}
            sm={3}
            key={comment.commentId}
          >
            <Button
              variant={
                selectedCommentId === comment.commentId
                  ? "contained"
                  : "outlined"
              }
              onClick={() => setSelectedCommentId(comment.commentId)}
            >
              {comment.commentId.slice(0, 7)}
            </Button>
          </Grid>
        ))}
      </Grid>
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
