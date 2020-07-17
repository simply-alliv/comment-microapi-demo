import React, { FunctionComponent, useContext } from "react";
import {
  Box,
  Typography,
  FormHelperText,
  FormControl,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { Reply } from "../../common/models";
import { CommentsContext } from "../../context/comments";
import { CommentsActionType } from "../../common/enums";

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

const ReplySelect: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);

  const classes = useStyles();

  const handleSelectedReplyChange = (event: React.ChangeEvent<any>) => {
    dispatch({
      type: CommentsActionType.SET_SELECTED_REPLY,
      payload: { replyId: event.target.value },
    });
  };

  return (
    <React.Fragment>
      {state.selectedComment ? (
        <FormControl className={classes.formControl}>
          <Select
            value={state.selectedReply?.replyId ?? ""}
            onChange={handleSelectedReplyChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "selected reply ID" }}
          >
            {state.selectedCommentReplies &&
            state.selectedCommentReplies?.length > 0 ? (
              state.selectedCommentReplies.map((reply: Reply) => {
                return (
                  <MenuItem value={reply.replyId} key={reply.replyId}>
                    {reply.replyId.slice(0, 7)}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem value="No Reply">No Reply</MenuItem>
            )}
          </Select>
          <FormHelperText>Selected Reply</FormHelperText>
        </FormControl>
      ) : (
        <Box display="flex" justifyContent="center">
          <Typography variant="overline" align="center">
            A SELECTED COMMENT IS REQURED
          </Typography>
        </Box>
      )}
    </React.Fragment>
  );
};

export default ReplySelect;
