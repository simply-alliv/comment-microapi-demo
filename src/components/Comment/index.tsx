import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Reply, { ReplyProps } from "./Reply";

export type CommentProps = {
  name: string;
  content: string;
  creationDate: Date;
  replies: ReplyProps[];
};

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

const Comment: FunctionComponent<CommentProps> = ({
  name,
  content,
  creationDate,
  replies,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">{content}</Typography>
          <Typography variant="caption" color="textSecondary">
            {calculateTimeSince(creationDate)}
          </Typography>
        </CardContent>
      </Card>
      <Box py={2}>
        <Grid container spacing={2}>
          {replies.map((reply) => {
            return (
              <Grid
                item
                key={reply.creationDate.getTime()}
                className={classes.root}
              >
                <Reply
                  name={reply.name}
                  content={reply.content}
                  creationDate={reply.creationDate}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Comment;

export const calculateTimeSince = (creationDate: Date) => {
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
