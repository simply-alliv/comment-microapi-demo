import React, { FunctionComponent, useState, useContext } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";
import CommentSelect from "../../../CommentSelect";
import { CommentsContext } from "../../../../context/comments";
import { CommentsActionType } from "../../../../common/enums";

const getAllReplyEndpoint = ["GET /comments/:commentId/replies"];
const getAllReplyHeading = "GET all replies";
const getAllReplySubtitle = "Need to get some replies?";

const filters = ["By flag state", "By owner ID"];

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
  },
}));

const AllReplies: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedFilters, setSelectedFilters] = useState("");

  const classes = useStyles();

  const handleGetAllRepliesClick = () => {
    if (state.selectedComment) {
      dispatch({
        type: CommentsActionType.GET_ALL_REPLIES,
        payload: { commentId: state.selectedComment.commentId },
      });
    }
  };

  return (
    <Box>
      <TabViewIntroSection
        endpoints={getAllReplyEndpoint}
        heading={getAllReplyHeading}
        subtitle={getAllReplySubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment to access for its replies.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <CommentSelect></CommentSelect>
      </Box>
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
        <Button
          variant="contained"
          color="secondary"
          disabled={
            state.loading ||
            state.selectedComment === undefined ||
            state.selectedComment?.numOfReplies === 0
          }
          onClick={handleGetAllRepliesClick}
        >
          {state.loading
            ? "Please Wait..."
            : state.selectedComment?.numOfReplies === 0
            ? "No Reply"
            : "Get All Replies"}
        </Button>
      </Box>
    </Box>
  );
};

export default AllReplies;
