import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";
import { CommentsContext } from "../../../../context/comments";
import { CommentsActionType } from "../../../../common/enums";

const getAllCommentEndpoint = ["GET /comments"];
const getAllCommentHeading = "GET all comments";
const getAllCommentSubtitle = "Need to get some comments?";

const filters = [
  "By flag state",
  "By reference ID",
  "By owner ID",
  "By origin",
];

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
  },
}));

const AllComments: FunctionComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState("");
  const [state, dispatch] = useContext(CommentsContext);

  const classes = useStyles();

  const handleGetAllCommentsClick = () => {
    dispatch({
      type: CommentsActionType.GET_ALL_COMMENTS,
      payload: { selectedFilters },
    });
  };

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
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading}
          onClick={handleGetAllCommentsClick}
        >
          {state.loading ? "Please Wait..." : "Get All Comments"}
        </Button>
      </Box>
    </Box>
  );
};

export default AllComments;
