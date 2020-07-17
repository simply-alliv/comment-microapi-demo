import React, { FunctionComponent, useState, useContext } from "react";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  FormControl,
  Select,
  FormHelperText,
  MenuItem,
} from "@material-ui/core";
import TabViewIntroSection from "../../../TabViewIntroSection";
import CommentSelect from "../../../CommentSelect";
import { CommentsContext } from "../../../../context/comments";
import { CommentsActionType } from "../../../../common/enums";

const getAllReplyEndpoint = ["GET /comments/:commentId/replies"];
const getAllReplyHeading = "GET all replies";
const getAllReplySubtitle = "Need to get some replies?";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const NO_STATE = 0;
const FLAGGED_STATE = 1;
const UNFLAGGED_STATE = 2;
const ALL_OWNERS = "";
const NO_SORT = "";
const NO_PAGE = "";

const AllReplies: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [flagState, setFlagState] = useState(NO_STATE);
  const [ownerId, setOwnerId] = useState(ALL_OWNERS);
  const [sort, setSort] = useState(NO_SORT);
  const [page, setPage] = useState(NO_PAGE);

  const classes = useStyles();

  const handleSelectedFlagStateChange = (event: React.ChangeEvent<any>) => {
    setFlagState(event.target.value);
  };

  const handleSelectedOwnerIdChange = (event: React.ChangeEvent<any>) => {
    setOwnerId(event.target.value);
  };

  const handleSelectedSortChange = (event: React.ChangeEvent<any>) => {
    setSort(event.target.value);
  };

  const handleSelectedPageChange = (event: React.ChangeEvent<any>) => {
    setPage(event.target.value);
  };

  const handleGetAllRepliesClick = () => {
    let _isFlagged;
    let _ownerId;
    let _sort;
    let _page;

    if (state.selectedComment) {
      if (flagState !== NO_STATE) {
        _isFlagged = flagState === FLAGGED_STATE;
      }

      if (ownerId !== ALL_OWNERS) {
        _ownerId = ownerId;
      }

      if (sort !== NO_SORT) {
        _sort = sort;
      }

      if (page !== NO_PAGE) {
        _page = page;
      }

      dispatch({
        type: CommentsActionType.GET_ALL_REPLIES,
        payload: {
          commentId: state.selectedComment.commentId,
          pageQuery: {
            isFlagged: _isFlagged,
            ownerId: _ownerId,
            sort: _sort,
            page: _page,
          },
        },
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
          Need to filter, sort, or paginate on a list of replies? No problem.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid className={classes.root} item xs={6}>
          <FormControl className={classes.formControl}>
            <Select
              value={flagState}
              onChange={handleSelectedFlagStateChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "selected flag state" }}
            >
              <MenuItem value={NO_STATE}>All</MenuItem>
              <MenuItem value={FLAGGED_STATE}>Flagged</MenuItem>
              <MenuItem value={UNFLAGGED_STATE}>Unflagged</MenuItem>
            </Select>
            <FormHelperText>By Flag State</FormHelperText>
          </FormControl>
        </Grid>
        <Grid className={classes.root} item xs={6}>
          <FormControl className={classes.formControl}>
            <Select
              value={ownerId}
              onChange={handleSelectedOwnerIdChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "selected owner ID" }}
            >
              <MenuItem value={ALL_OWNERS}>All</MenuItem>
              <MenuItem value="you@gmail.com">you@gmail.com</MenuItem>
            </Select>
            <FormHelperText>By Owner ID</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Or do you need to sort or paginate on a list of replies? It's still
          not a problem.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid className={classes.root} item xs={6}>
          <FormControl className={classes.formControl}>
            <Select
              value={sort}
              onChange={handleSelectedSortChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "selected sort" }}
            >
              <MenuItem value={NO_SORT}>None</MenuItem>
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
            <FormHelperText>Sort</FormHelperText>
          </FormControl>
        </Grid>
        <Grid className={classes.root} item xs={6}>
          <FormControl className={classes.formControl}>
            <Select
              value={page}
              onChange={handleSelectedPageChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "selected page" }}
            >
              <MenuItem value={NO_PAGE}>None</MenuItem>
            </Select>
            <FormHelperText>Page</FormHelperText>
          </FormControl>
        </Grid>
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
