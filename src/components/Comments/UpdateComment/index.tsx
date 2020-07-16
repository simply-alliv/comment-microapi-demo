import React, { FunctionComponent, useContext, useState } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";
import { CommentsContext } from "../../../context/comments";
import { CommentsActionType } from "../../../common/enums";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextareaAutosize,
  makeStyles,
} from "@material-ui/core";

const updateComponentEndpoints = ["PATCH /comments/:commentId"];
const updateComponentHeading = "Update a comment";
const updateComponentSubtitle = "Sometimes we need to make some changes.";
const defaultText =
  "Hey, I hope that you are well. I was just looking to confirm our meeting for 10am sharp this morning. Please get back to me as soon as you get this.";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
  },
}));

const UpdateComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedCommentId, setSelectedCommentId] = useState(
    state.comments[0].commentId
  );
  let content = "";

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    content = event.target.value;
  };

  const handleUpdateCommentClick = () => {
    dispatch({
      type: CommentsActionType.UPDATE_COMMENT,
      payload: { content },
    });
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={updateComponentEndpoints}
        heading={updateComponentHeading}
        subtitle={updateComponentSubtitle}
      ></TabViewIntroSection>

      <Box mt={6} mb={1}></Box>
      <Typography variant="body2" align="center" color="textSecondary">
        Select a comment that you'd like to update
      </Typography>
      <Box mb={1}></Box>
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
      <Box mt={6}></Box>
      <Typography variant="body2" align="center" color="textSecondary">
        What's changed? Write it in the box below.
      </Typography>
      <Box display="flex" flexDirection="column" mt={1}>
        <TextareaAutosize
          rowsMin={5}
          rowsMax={5}
          defaultValue={defaultText}
          onChange={handleChange}
        ></TextareaAutosize>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading}
          onClick={handleUpdateCommentClick}
        >
          {state.loading ? "Please Wait..." : "Update Comment"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default UpdateComment;
