import React, { FunctionComponent, useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";

const getAllCommentEndpoint = ["GET /comments"];
const getAllCommentHeading = "GET all comments";
const getAllCommentSubtitle = "Need to get some comments?";

const filters = [
  "Filter by flag state",
  "Filter by reference ID",
  "Filter by owner ID",
  "Filter by origin",
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
}));

const AllComments: FunctionComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState("");

  const classes = useStyles();

  return (
    <Box>
      <TabViewIntroSection
        endpoints={getAllCommentEndpoint}
        heading={getAllCommentHeading}
        subtitle={getAllCommentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Need to filter for specifc comments? No problem.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {filters.map((filter) => (
          <Grid className={classes.root} item xs={6} sm={3} key={filter}>
            <Button
              variant={selectedFilters === filter ? "contained" : "outlined"}
              onClick={() => (
                selectedFilters === filter
                  ? setSelectedFilters("")
                  : setSelectedFilters(filter)
              )}
            >
              {filter}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
        <Button variant="contained" color="secondary">
          Get Comments
        </Button>
      </Box>
    </Box>
  );
};

export default AllComments;
