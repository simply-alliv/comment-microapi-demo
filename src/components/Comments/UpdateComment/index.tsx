import React, { FunctionComponent, useContext, useState } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";
import CommentSelect from "../../CommentSelect";
import { CommentsContext } from "../../../context/comments";
import { Comment } from "../../../common/models";
import { CommentsActionType } from "../../../common/enums";
import { Box, Button, Typography, TextareaAutosize } from "@material-ui/core";

const updateComponentEndpoints = ["PATCH /comments/:commentId"];
const updateComponentHeading = "Update a comment";
const updateComponentSubtitle = "Sometimes we need to make some changes.";

const UpdateComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedComment, setSelectedComment] = useState(state.comments[0]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedComment = {
      ...selectedComment,
      content: event.target.value,
    };

    setSelectedComment(updatedComment);
  };

  const handleSelectedCommentChange = (comment: Comment) => {
    setSelectedComment(comment);
  };

  const handleUpdateCommentClick = () => {
    dispatch({
      type: CommentsActionType.UPDATE_COMMENT,
      payload: {
        commentId: selectedComment.commentId,
        updateCommentDTO: {
          content: selectedComment.content,
        },
      },
    });
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={updateComponentEndpoints}
        heading={updateComponentHeading}
        subtitle={updateComponentSubtitle}
      ></TabViewIntroSection>

      <Box mt={6} mb={1}></Box>
      <Typography variant="body2" align="center" color="textSecondary">
        Select a comment that you'd like to update
      </Typography>
      <Box mb={1} display="flex" justifyContent="center">
        <CommentSelect
          state={state}
          onChange={handleSelectedCommentChange}
        ></CommentSelect>
      </Box>
      <Box mt={6}></Box>
      <Typography variant="body2" align="center" color="textSecondary">
        What's changed? Write it in the box below.
      </Typography>
      <Box display="flex" flexDirection="column" mt={1}>
        <TextareaAutosize
          rowsMin={5}
          rowsMax={5}
          value={selectedComment.content}
          onChange={handleContentChange}
        ></TextareaAutosize>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading}
          onClick={handleUpdateCommentClick}
        >
          {state.loading ? "Please Wait..." : "Update Comment"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default UpdateComment;
