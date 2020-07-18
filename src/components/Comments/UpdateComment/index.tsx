import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";

import TabViewIntroSection from "../../TabViewIntroSection";
import CommentSelect from "../../CommentSelect";
import { CommentsContext } from "../../../context/comments";
import { CommentsActionType } from "../../../common/enums";
import { Box, Button, Typography, TextareaAutosize } from "@material-ui/core";

const updateComponentEndpoints = ["PATCH /comments/:commentId"];
const updateComponentHeading = "Update a comment";
const updateComponentSubtitle = "Sometimes we need to make some changes.";

const UpdateComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (state.selectedComment) {
      setContent(state.selectedComment.content);
    }
  }, [state.selectedComment]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(event.target.value);
  };

  const handleUpdateCommentClick = () => {
    if (state.selectedComment) {
      dispatch({
        type: CommentsActionType.UPDATE_COMMENT,
        payload: {
          commentId: state.selectedComment.commentId,
          updateCommentDTO: {
            content,
          },
        },
      });
    }
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
        <CommentSelect></CommentSelect>
      </Box>
      <Box mt={6}></Box>
      <Typography variant="body2" align="center" color="textSecondary">
        What's changed? Write it in the box below.
      </Typography>
      <Box display="flex" flexDirection="column" mt={1}>
        <TextareaAutosize
          rowsMin={5}
          rowsMax={5}
          value={content}
          onChange={handleContentChange}
        ></TextareaAutosize>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading || state.selectedComment === undefined}
          onClick={handleUpdateCommentClick}
        >
          {state.loading
            ? "Please Wait..."
            : state.selectedComment === undefined
            ? "No Comment"
            : "Update Comment"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default UpdateComment;
