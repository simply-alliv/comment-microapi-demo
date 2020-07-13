import React, { FunctionComponent, useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";

const getSingleCommentEndpoint = ["GET /comments/commentId"];
const getSingleCommentHeading = "GET single comments";
const getSingleCommentSubtitle = "Need to get just one comment?";

const comments = ["Comment 1", "Comment 2", "Comment 3", "Comment 4"];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
}));

const SingleComment: FunctionComponent = () => {
  const [selectedComment, setSelectedComment] = useState(comments[0]);

  const classes = useStyles();

  return (
    <Box mt={12} mb={1}>
      <TabViewIntroSection
        endpoints={getSingleCommentEndpoint}
        heading={getSingleCommentHeading}
        subtitle={getSingleCommentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment that you'd like to get
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {comments.map((comment) => (
          <Grid className={classes.root} item xs={6} sm={3} key={comment}>
            <Button
              variant={selectedComment === comment ? "contained" : "outlined"}
              onClick={() => setSelectedComment(comment)}
            >
              {comment}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button variant="contained" color="secondary">
          Get Comment
        </Button>
      </Box>
    </Box>
  );
};

export default SingleComment;
