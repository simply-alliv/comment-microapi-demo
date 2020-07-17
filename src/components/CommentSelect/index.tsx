import React, { FunctionComponent, useState } from "react";

import { State as CommentsContextState } from "../../context/comments";
import {
  makeStyles,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Comment } from "../../common/models";

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

type CommentSelectProps = {
  state: CommentsContextState;
  onChange: Function;
};

const CommentSelect: FunctionComponent<CommentSelectProps> = ({
  state,
  onChange,
}) => {
  const [selectedComment, setSelectedComment] = useState(state.comments[0]);

  const classes = useStyles();

  const handleSelectedCommentChange = (event: React.ChangeEvent<any>) => {
    const commentId = event.target.value;
    const selectedComment = state.comments.find(
      (comment: Comment) => comment.commentId === commentId
    );
    if (selectedComment) {
      onChange(selectedComment);
      setSelectedComment(selectedComment);
    }
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={selectedComment.commentId}
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
