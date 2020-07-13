import React, { FunctionComponent, useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";

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
  const [selectedVoteType, setSelectedVoteType] = useState(voteTypes[0]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={voteComponentEndpoints}
        heading={voteComponentHeading}
        subtitle={voteComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a vote type you'd like to add to a reply.
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
        <Button variant="contained" color="secondary">
          Vote Reply
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default VoteReply;
