import React, { FunctionComponent, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import TabViewIntroSection from "../../TabViewIntroSection";

const flagComponentEndpoints = ["PATCH /comments/:commentId/flag"];
const flagComponentHeading = "Flag a comment";
const flagComponentSubtitle = "Didn’t like a comment? Do something about it.";

const comments = ["Comment 1", "Comment 2", "Comment 3", "Comment 4"];

const FlagComment: FunctionComponent = () => {
  const [selectedComment, setSelectedComment] = useState(comments[0]);

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={flagComponentEndpoints}
        heading={flagComponentHeading}
        subtitle={flagComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6}>
        <Typography variant="body2" align="center" color="textSecondary">
          Which comment would you like to flag?
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
        {comments.map((comment, index) => {
          return (
            <React.Fragment>
              {index < comments.length ? (
                <Box mr={2}></Box>
              ) : (
                <React.Fragment></React.Fragment>
              )}
              <Button
                key={comment}
                variant={selectedComment === comment ? "contained" : "outlined"}
                onClick={() => setSelectedComment(comment)}
              >
                {comment}
              </Button>
            </React.Fragment>
          );
        })}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button variant="contained" color="secondary">
          Comment
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default FlagComment;
