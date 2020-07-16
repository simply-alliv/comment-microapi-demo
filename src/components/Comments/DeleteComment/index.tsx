import React, { FunctionComponent, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TabViewIntroSection from "../../TabViewIntroSection";
import { CommentsContext } from "../../../context/comments";
import { CommentsActionType } from "../../../common/enums";

const deleteComponentEndpoints = ["DELETE /comments/:commentId"];
const deleteComponentHeading = "Delete a comment";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const useStyles = makeStyles({
  root: {
    display: "grid",
  },
});

const DeleteComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedCommentId, setSelectedCommentId] = useState(
    state.comments[0].commentId
  );

  const classes = useStyles();

  const handleDeleteSingleCommentClick = () => {
    dispatch({
      type: CommentsActionType.DELETE_COMMENT,
      payload: { commentId: selectedCommentId },
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
          Select a comment you'd like to delete.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {state.comments.slice(0, 4).map((comment) => {
          return (
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
          );
        })}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading}
          onClick={handleDeleteSingleCommentClick}
        >
          {state.loading ? "Please Wait..." : "Delete Comment"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default DeleteComment;
