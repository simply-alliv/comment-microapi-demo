import React, { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import TabViewIntroSection from "../../TabViewIntroSection";

const createComponentEndpoints = ["POST /comments"];
const createComponentHeading = "Create a comment";
const createComponentSubtitle =
  "The first step is to always create the comment.";

const CreateComment: FunctionComponent = () => {
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
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <Button variant="contained" color="secondary">
          Comment
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateComment;
