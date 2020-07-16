import React, { FunctionComponent, useContext, useState } from "react";
import { Box, Typography, TextareaAutosize, Button } from "@material-ui/core";
import TabViewIntroSection from "../../TabViewIntroSection";
import CommentSelect from "../../CommentSelect";
import { CommentsContext } from "../../../context/comments";
import { Comment } from "../../../common/models";
import { CommentsActionType } from "../../../common/enums";

const createComponentEndpoints = ["POST /comments/:commentId/replies"];
const createComponentHeading = "Create a reply";
const createComponentSubtitle = "Comments can always be responded to.";

const CreateReply: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [selectedComment, setSelectedComment] = useState(state.comments[0]);
  let content = "";

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    content = event.target.value;
  };

  const handleSelectedCommentChange = (comment: Comment) => {
    setSelectedComment(comment);
  };

  const handleCreateReplyClick = () => {
    dispatch({
      type: CommentsActionType.CREATE_REPLY,
      payload: { commentId: selectedComment.commentId, content },
    });
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={createComponentEndpoints}
        heading={createComponentHeading}
        subtitle={createComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment you'd like to create a reply for.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <CommentSelect
          state={state}
          onChange={handleSelectedCommentChange}
        ></CommentSelect>
      </Box>
      <Box mt={6}>
        <Typography variant="body2" align="center" color="textSecondary">
          What are you thinking about? Write it in the box below.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" mt={1}>
        <TextareaAutosize
          rowsMin={5}
          rowsMax={5}
          onChange={handleContentChange}
        ></TextareaAutosize>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading}
          onClick={handleCreateReplyClick}
        >
          {state.loading ? "Please Wait..." : "Create Reply"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateReply;
