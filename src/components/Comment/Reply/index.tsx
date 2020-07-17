import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { calculateTimeSince } from "../index";
import { Reply as ReplyModel } from "../../../common/models";

export type ReplyProps = {
  reply: ReplyModel;
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#FAFAFA",
  },
}));

const Reply: FunctionComponent<ReplyProps> = ({ reply }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h6">{reply.replyId.slice(0, 7)}</Typography>
        <Typography variant="body2">{reply.content}</Typography>
        <Typography variant="caption" color="textSecondary">
          {calculateTimeSince(reply.createdAt)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Reply;
