import React, { FunctionComponent, useContext } from "react";
import {
  makeStyles,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Comment } from "../../common/models";
import { CommentsContext } from "../../context/comments";
import { CommentsResultType } from "../../common/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// type CommentSelectProps = {
//   state: CommentsContextState;
//   onChange: Function;
// };

const CommentSelect: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);

  const classes = useStyles();

  const handleSelectedCommentChange = (event: React.ChangeEvent<any>) => {
    dispatch({
      type: CommentsResultType.SET_SELECTED_COMMENT,
      payload: { commentId: event.target.value },
    });
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={state.selectedComment?.commentId ?? ""}
        onChange={handleSelectedCommentChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "selected comment ID" }}
      >
        {state.comments.map((comment: Comment) => {
          return (
            <MenuItem value={comment.commentId} key={comment.commentId}>
              {comment.commentId.slice(0, 7)}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>Selected Comment</FormHelperText>
    </FormControl>
  );
};

export default CommentSelect;
