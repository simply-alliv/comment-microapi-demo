import React, { FunctionComponent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TabViewIntroSection from "../../TabViewIntroSection";

const deleteComponentEndpoints = ["DELETE /comments/:commentId"];
const deleteComponentHeading = "Delete a comment";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const comments = ["Comment 1", "Comment 2", "Comment 3", "Comment 4"];

const useStyles = makeStyles({
  root: {
    display: "grid",
  },
});

const DeleteComment: FunctionComponent = () => {
  const [selectedComment, setSelectedComment] = useState(comments[0]);

  const classes = useStyles();

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
        {comments.map((comment) => {
          return (
            <Grid className={classes.root} item xs={6} sm={3} key={comment}>
              <Button
                variant={selectedComment === comment ? "contained" : "outlined"}
                onClick={() => setSelectedComment(comment)}
              >
                {comment}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button variant="contained" color="secondary">
          Delete Comment
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default DeleteComment;
