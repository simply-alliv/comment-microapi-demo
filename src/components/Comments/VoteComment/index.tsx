import React, { FunctionComponent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import TabViewIntroSection from "../../TabViewIntroSection";

const voteComponentEndpoints = [
  "PATCH /comments/:commentId/votes/upvote",
  "PATCH /comments/:commentId/votes/downvote",
];
const voteComponentHeading = "Vote on a comment";
const voteComponentSubtitle =
  "Was a really good comment? Show your appreciation.";

const voteTypes = ["Upvote", "Downvote"];

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "grid",
  },
});

const VoteComment: FunctionComponent = () => {
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
          Select a vote type you'd like to add to a comment.
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
          Vote Comment
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default VoteComment;
