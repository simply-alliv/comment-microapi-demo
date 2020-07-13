import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { calculateTimeSince } from "../index";

export type ReplyProps = {
  name: string;
  content: string;
  creationDate: Date;
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#FAFAFA",
  },
}));

const Reply: FunctionComponent<ReplyProps> = ({
  name,
  content,
  creationDate,
}) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{content}</Typography>
        <Typography variant="caption" color="textSecondary">
          {calculateTimeSince(creationDate)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Reply;
