import React, { FunctionComponent, useContext } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TabViewIntroSection from "../../TabViewIntroSection";
import CommentSelect from "../../CommentSelect";
import { CommentsContext } from "../../../context/comments";
import { CommentsActionType } from "../../../common/enums";

const deleteComponentEndpoints = ["DELETE /comments/:commentId"];
const deleteComponentHeading = "Delete a comment";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const DeleteComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);

  const handleDeleteSingleCommentClick = () => {
    if (state.selectedComment) {
      dispatch({
        type: CommentsActionType.DELETE_COMMENT,
        payload: { commentId: state.selectedComment.commentId },
      });
    }
  };

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={deleteComponentEndpoints}
        heading={deleteComponentHeading}
        subtitle={deleteComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6} mb={1}>
        <Typography variant="body2" align="center" color="textSecondary">
          Select a comment you'd like to delete.
        </Typography>
      </Box>
      <Box mb={1} display="flex" justifyContent="center">
        <CommentSelect></CommentSelect>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          disabled={state.loading || state.selectedComment === undefined}
          onClick={handleDeleteSingleCommentClick}
        >
          {state.loading
            ? "Please Wait..."
            : state.selectedComment === undefined
            ? "No Comment"
            : "Delete Comment"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default DeleteComment;
