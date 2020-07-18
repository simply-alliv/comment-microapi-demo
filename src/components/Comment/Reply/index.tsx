import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
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
        <Box pt={2}></Box>
        <Divider />
        <Box pt={2} display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center" pr={2}>
              <Typography color="textSecondary">Upvotes </Typography>
              <Box pr={1}></Box>
              <Typography>{`${reply.numOfUpVotes}`}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Typography color="textSecondary">Downvotes</Typography>
              <Box pr={1}></Box>
              <Typography>{`${reply.numOfDownVotes}`}</Typography>
            </Box>
          </Box>
          <div>
            {reply.numOfFlags > 0 ? (
              <Typography variant="caption" color="error">
                Flagged
              </Typography>
            ) : null}
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Reply;
