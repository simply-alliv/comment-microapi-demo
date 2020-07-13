import React, { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

import TabViewIntroSection from "../../TabViewIntroSection";

const updateComponentEndpoints = ["PATCH /comments/:commentId"];
const updateComponentHeading = "Update a comment";
const updateComponentSubtitle = "Sometimes we need to make some changes.";
const defaultText =
  "Hey, I hope that you are well. I was just looking to confirm our meeting for 10am sharp this morning. Please get back to me as soon as you get this.";

const UpdateComment: FunctionComponent = () => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {};

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={updateComponentEndpoints}
        heading={updateComponentHeading}
        subtitle={updateComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6}>
        <Typography variant="body2" align="center" color="textSecondary">
          What's changed? Write it in the box below.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" mt={1}>
        <TextareaAutosize
          rowsMin={5}
          rowsMax={5}
          defaultValue={defaultText}
          onChange={handleChange}
        ></TextareaAutosize>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button variant="contained" color="secondary">
          Update Comment
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default UpdateComment;
