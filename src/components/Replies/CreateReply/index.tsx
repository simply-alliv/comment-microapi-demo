import React, { FunctionComponent } from "react";
import { Box, Typography, TextareaAutosize, Button } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";

const createComponentEndpoints = ["POST /comments/:commentId/replies"];
const createComponentHeading = "Create a reply";
const createComponentSubtitle = "Comments can always be responded to.";

const CreateReply: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={createComponentEndpoints}
        heading={createComponentHeading}
        subtitle={createComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6}>
        <Typography variant="body2" align="center" color="textSecondary">
          What are you thinking about? Write it in the box below.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" mt={1}>
        <TextareaAutosize rowsMin={5} rowsMax={5}></TextareaAutosize>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button variant="contained" color="secondary">
          Create Reply
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateReply;
