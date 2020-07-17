import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Reply from "./Reply";
import {
  Comment as CommentModel,
  Reply as ReplyModel,
} from "../../common/models";

export type CommentProps = {
  comment: CommentModel;
  replies: ReplyModel[];
};

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

const Comment: FunctionComponent<CommentProps> = ({ comment, replies }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h6">{comment.commentId.slice(0, 7)}</Typography>
          <Typography variant="body2">{comment.content}</Typography>
          <Typography variant="caption" color="textSecondary">
            {calculateTimeSince(comment.createdAt)}
          </Typography>
        </CardContent>
      </Card>
      <Box py={2}>
        <Grid container spacing={2}>
          {replies.map((reply: ReplyModel) => {
            return (
              <Grid item key={reply.replyId} className={classes.root}>
                <Reply reply={reply} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Comment;

export const calculateTimeSince = (createdAt: string) => {
  const creationDate = new Date(createdAt);

  const seconds = Math.floor(
    (new Date().valueOf() - creationDate.valueOf()) / 1000
  );

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }

  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return interval + " months ago";
  }

  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return interval + " days ago";
  }

  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return interval + " hours ago";
  }

  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return interval + " minutes ago";
  }

  return Math.floor(seconds) + " seconds ago";
};
