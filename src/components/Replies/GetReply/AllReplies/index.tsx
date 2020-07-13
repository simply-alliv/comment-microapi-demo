import React, { FunctionComponent, useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";

const getAllReplyEndpoint = ["GET /comments/:commentId/replies"];
const getAllReplyHeading = "GET all replies";
const getAllReplySubtitle = "Need to get some replies?";

const filters = [
  "By flag state",
  "By owner ID",
];

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
  },
}));

const AllReplies: FunctionComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState("");

  const classes = useStyles();

  return (
    <Box>
      <TabViewIntroSection
        endpoints={getAllReplyEndpoint}
        heading={getAllReplyHeading}
        subtitle={getAllReplySubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Need to filter for specifc replies? No problem.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {filters.map((filter) => (
          <Grid className={classes.root} item xs={6} key={filter}>
            <Button
              variant={selectedFilters === filter ? "contained" : "outlined"}
              onClick={() =>
                selectedFilters === filter
                  ? setSelectedFilters("")
                  : setSelectedFilters(filter)
              }
            >
              {filter}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
        <Button variant="contained" color="secondary">
          Get Replies
        </Button>
      </Box>
    </Box>
  );
};

export default AllReplies;
