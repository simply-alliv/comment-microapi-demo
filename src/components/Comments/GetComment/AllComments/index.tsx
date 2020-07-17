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
import { CommentsContext } from "../../../../context/comments";
import { CommentsActionType } from "../../../../common/enums";

const getAllCommentEndpoint = ["GET /comments"];
const getAllCommentHeading = "GET all comments";
const getAllCommentSubtitle = "Need to get some comments?";

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
const ALL_REFS = "";
const ALL_ORIGINS = "";
const NO_SORT = "";
const NO_PAGE = "";

const AllComments: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [flagState, setFlagState] = useState(NO_STATE);
  const [ownerId, setOwnerId] = useState(ALL_OWNERS);
  const [refId, setRefId] = useState(ALL_REFS);
  const [origin, setOrigin] = useState(ALL_ORIGINS);
  const [sort, setSort] = useState(NO_SORT);
  const [page, setPage] = useState(NO_PAGE);

  const classes = useStyles();

  const handleSelectedFlagStateChange = (event: React.ChangeEvent<any>) => {
    setFlagState(event.target.value);
  };

  const handleSelectedOwnerIdChange = (event: React.ChangeEvent<any>) => {
    setOwnerId(event.target.value);
  };

  const handleSelectedRefIdChange = (event: React.ChangeEvent<any>) => {
    setRefId(event.target.value);
  };

  const handleSelectedOriginChange = (event: React.ChangeEvent<any>) => {
    setOrigin(event.target.value);
  };

  const handleSelectedSortChange = (event: React.ChangeEvent<any>) => {
    setSort(event.target.value);
  };

  const handleSelectedPageChange = (event: React.ChangeEvent<any>) => {
    setPage(event.target.value);
  };

  const handleGetAllCommentsClick = () => {
    let _isFlagged;
    let _ownerId;
    let _refId;
    let _origin;
    let _sort;
    let _page;

    if (flagState !== NO_STATE) {
      _isFlagged = flagState === FLAGGED_STATE;
    }

    if (ownerId !== ALL_OWNERS) {
      _ownerId = ownerId;
    }

    if (refId !== ALL_REFS) {
      _refId = refId;
    }

    if (origin !== ALL_ORIGINS) {
      _origin = origin;
    }

    if (sort !== NO_SORT) {
      _sort = sort;
    }

    if (page !== NO_PAGE) {
      _page = page;
    }

    dispatch({
      type: CommentsActionType.GET_ALL_COMMENTS,
      payload: {
        pageQuery: {
          isFlagged: _isFlagged,
          ownerId: _ownerId,
          refId: _refId,
          origin: _origin,
          sort: _sort,
          page: _page,
        },
      },
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
          Need to filter on a list of comments? No problem.
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
        <Grid className={classes.root} item xs={6}>
          <FormControl className={classes.formControl}>
            <Select
              value={origin}
              onChange={handleSelectedOriginChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "selected origin" }}
            >
              <MenuItem value={ALL_ORIGINS}>All</MenuItem>
            </Select>
            <FormHelperText>By Origin</FormHelperText>
          </FormControl>
        </Grid>
        <Grid className={classes.root} item xs={6}>
          <FormControl className={classes.formControl}>
            <Select
              value={refId}
              onChange={handleSelectedRefIdChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "selected ref ID" }}
            >
              <MenuItem value={ALL_REFS}>All</MenuItem>
            </Select>
            <FormHelperText>By Reference ID</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Or do you need to sort or paginate on a list of comments? Still not a
          problem.
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
