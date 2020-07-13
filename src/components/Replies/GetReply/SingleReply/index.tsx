import React, { FunctionComponent, useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";

const getSingleReplyEndpoint = ["GET /comments/:commentId/replies/:replyId"];
const getSingleReplyHeading = "GET a single reply";
const getSingleReplySubtitle = "Need to get a specific reply?";

const replies = ["Reply 1", "Reply 2", "Reply 3", "Reply 4"];

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
  },
}));

const SingleReply: FunctionComponent = () => {
  const [selectedReply, setSelectedReply] = useState(replies[0]);

  const classes = useStyles();

  return (
    <Box mt={12} mb={1}>
      <TabViewIntroSection
        endpoints={getSingleReplyEndpoint}
        heading={getSingleReplyHeading}
        subtitle={getSingleReplySubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a reply that you'd like to get
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {replies.map((reply) => (
          <Grid className={classes.root} item xs={6} sm={3} key={reply}>
            <Button
              variant={selectedReply === reply ? "contained" : "outlined"}
              onClick={() => setSelectedReply(reply)}
            >
              {reply}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button variant="contained" color="secondary">
          Get Reply
        </Button>
      </Box>
    </Box>
  );
};

export default SingleReply;
