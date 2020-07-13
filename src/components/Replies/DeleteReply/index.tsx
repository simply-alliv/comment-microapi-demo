import React, { FunctionComponent, useState } from "react";
import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";

const deleteComponentEndpoints = [
  "DELETE /comments/:commentId/replies/:replyId",
];
const deleteComponentHeading = "Delete a reply";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const replies = ["Reply 1", "Reply 2", "Reply 3", "Reply 4"];

const useStyles = makeStyles({
  root: {
    display: "grid",
  },
});

const DeleteReply: FunctionComponent = () => {
  const [selectedReply, setSelectedReply] = useState(replies[0]);

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
          Select a reply you'd like to delete.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {replies.map((reply) => {
          return (
            <Grid className={classes.root} item xs={6} sm={3} key={reply}>
              <Button
                variant={selectedReply === reply ? "contained" : "outlined"}
                onClick={() => setSelectedReply(reply)}
              >
                {reply}
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button variant="contained" color="secondary">
          Delete Reply
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default DeleteReply;
