import React, { FunctionComponent } from "react";
import { Box, Button, TextareaAutosize, Typography, } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";

const updateComponentEndpoints = [
  "PATCH /comments/:commentId/replies/:replyId",
];
const updateComponentHeading = "Update a reply";
const updateComponentSubtitle = "Sometimes we need to make some changes.";
const defaultText =
  "Hey, I'm such a lazy intern. My dream is to become the greatest and the brightest but I'm so weak and cannot work my behind off to save my life";

const UpdateReply: FunctionComponent = () => {
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
          How do you plan to respond? Write in the box below.
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
          Update Reply
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default UpdateReply;
