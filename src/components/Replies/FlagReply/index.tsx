import React, { FunctionComponent, useState } from "react";
import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";

const flagComponentEndpoints = [
  "PATCH /comments/:commentId/replies/:replyId/flag",
];
const flagComponentHeading = "Flag a reply";
const flagComponentSubtitle = "Didn’t like a reply? Do something about it.";

const replies = ["Reply 1", "Reply 2", "Reply 3", "Reply 4"];

const useStyles = makeStyles({
  root: {
    display: "grid",
  },
});

const FlagReply: FunctionComponent = () => {
  const [selectedReply, setSelectedReply] = useState(replies[0]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={flagComponentEndpoints}
        heading={flagComponentHeading}
        subtitle={flagComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a reply you'd like to flag.
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
          Flag Reply
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default FlagReply;
