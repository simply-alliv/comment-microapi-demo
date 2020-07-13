import React, { FunctionComponent } from "react";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";

const getAllCommentEndpoint = ["GET /comments"];
const getAllCommentHeading = "GET all comments";
const getAllCommentSubtitle = "Need to get some comments?";

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

const AllComments: FunctionComponent = () => {
  const classes = useStyles();

  const handleFlagFilter = (event: any) => {};

  const handleRefIdFilter = (event: any) => {};

  const handleOwnerIdFilter = (event: any) => {};

  const handleOriginFilter = (event: any) => {};

  return (
    <Box mt={10} mb={5}>
      <TabViewIntroSection
        endpoints={getAllCommentEndpoint}
        heading={getAllCommentHeading}
        subtitle={getAllCommentSubtitle}
      ></TabViewIntroSection>
      <Box mt={5}>
        <Typography variant="body2" align="center" color="textSecondary">
          Need to filter for specifc comments? No problem.
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
            Filter by flag state
          </Button>
          <Button variant="outlined" onClick={handleRefIdFilter}>
            Filter by reference ID
          </Button>
          <Button variant="outlined" onClick={handleOwnerIdFilter}>
            Filter by owner ID
          </Button>
          <Button variant="outlined" onClick={handleOriginFilter}>
            Filter by origin
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
        <Button
          variant="contained"
          color="secondary"
          style={{ borderRadius: 50 }}
        >
          Get Comments
        </Button>
      </Box>
    </Box>
  );
};

export default AllComments;
