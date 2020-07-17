import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormHelperText,
  FormControl,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { State as CommentsContextState } from "../../context/comments";
import { Comment, Reply } from "../../common/models";

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

type ReplySelectProps = {
  state: CommentsContextState;
  selectedComment?: Comment;
  onChange: Function;
};

const ReplySelect: FunctionComponent<ReplySelectProps> = ({
  state,
  selectedComment,
  onChange,
}) => {
  let firstUpdate = true;
  const [selectedCommentReplies, setSelectedCommentReplies] = useState<Reply[]>(
    []
  );
  const [selectedReply, setSelectedReply] = useState(selectedCommentReplies[0]);

  const classes = useStyles();

  const handleSelectedReplyChange = (event: React.ChangeEvent<any>) => {
    const replyId = event.target.value;
    const selectedReply = selectedCommentReplies.find(
      (reply: Reply) => reply.replyId === replyId
    );
    if (selectedReply) {
      onChange(selectedReply);
      setSelectedReply(selectedReply);
    }
  };

  useEffect(() => {
    const _selectedCommentReplies = state.replies.filter(
      (reply) => reply.commentId === selectedComment?.commentId
    );

    if (_selectedCommentReplies.length > 0) {
      setSelectedCommentReplies(_selectedCommentReplies);
      setSelectedReply(_selectedCommentReplies[0]);
    } else {
      setSelectedCommentReplies([]);
      setSelectedReply([][0]);
    }
  }, [selectedComment, state]);

  return (
    <React.Fragment>
      {selectedReply ? (
        <FormControl className={classes.formControl}>
          <Select
            value={selectedReply.replyId}
            onChange={handleSelectedReplyChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "selected reply ID" }}
          >
            {selectedCommentReplies.map((reply: Reply) => {
              if (firstUpdate) {
                firstUpdate = false;
                // Find a better solution for this. Updating state from within a render shouldn't be done.
                onChange(selectedReply);
              }

              return (
                <MenuItem value={reply.replyId} key={reply.replyId}>
                  {reply.replyId.slice(0, 7)}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Selected Reply</FormHelperText>
        </FormControl>
      ) : (
        <Box display="flex" justifyContent="center">
          <Typography variant="overline" align="center" color="textSecondary">
            NO REPLIES EXIST FOR THIS COMMENT
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
};

export default ReplySelect;
