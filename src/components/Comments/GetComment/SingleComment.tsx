import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";

const getSingleCommentEndpoint = ["GET /comments/commentId"];
const getSingleCommentHeading = "GET single comments";
const getSingleCommentSubtitle = "Need to get just one comment?";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  buttonGroup: {
    maxWidth: 800,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
}));

const SingleComment = () => {
  const classes = useStyles();

  const handleFlagFilter = (event: any) => {};

  const handleRefIdFilter = (event: any) => {};

  const handleOwnerIdFilter = (event: any) => {};

  const handleOriginFilter = (event: any) => {};

  return (
    <Box mt={10} mb={5}>
      <TabViewIntroSection
        endpoints={getSingleCommentEndpoint}
        heading={getSingleCommentHeading}
        subtitle={getSingleCommentSubtitle}
      ></TabViewIntroSection>
      <Box mt={5}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment that you'd like to get
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          className={classes.buttonGroup}
          mt={2}
        >
          <Button variant="outlined" onClick={handleFlagFilter}>
            Comment 1
          </Button>
          <Button variant="outlined" onClick={handleRefIdFilter}>
            Comment 2
          </Button>
          <Button variant="outlined" onClick={handleOwnerIdFilter}>
            Comment 3
          </Button>
          <Button variant="outlined" onClick={handleOriginFilter}>
            Comment 4
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
        <Button
          variant="contained"
          color="secondary"
          style={{ borderRadius: 50 }}
        >
          Get Comment
        </Button>
      </Box>
    </Box>
  );
};

export default SingleComment;
