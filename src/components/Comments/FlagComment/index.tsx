import React, { FunctionComponent, useState, useContext } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import TabViewIntroSection from "../../TabViewIntroSection";
import CommentSelect from "../../CommentSelect";
import { CommentsContext } from "../../../context/comments";
import { Comment } from "../../../common/models";
import { CommentsActionType } from "../../../common/enums";

const flagComponentEndpoints = ["PATCH /comments/:commentId/flag"];
const flagComponentHeading = "Flag a comment";
const flagComponentSubtitle = "Didn’t like a comment? Do something about it.";

const FlagComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedComment, setSelectedComment] = useState(state.comments[0]);

  const handleSelectedCommentChange = (comment: Comment) => {
    setSelectedComment(comment);
  };

  const handleFlagSingleCommentClick = () => {
    dispatch({
      type: CommentsActionType.FLAG_COMMENT,
      payload: { commentId: selectedComment.commentId },
    });
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={flagComponentEndpoints}
        heading={flagComponentHeading}
        subtitle={flagComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment you'd like to flag.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <CommentSelect
          state={state}
          onChange={handleSelectedCommentChange}
        ></CommentSelect>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading}
          onClick={handleFlagSingleCommentClick}
        >
          {state.loading ? "Please Wait..." : "Flag Comment"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default FlagComment;
