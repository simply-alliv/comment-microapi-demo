import React, { FunctionComponent } from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Comment from "../Comment";
import {
  Comment as CommentModel,
  Reply as ReplyModel,
} from "../../common/models";
import { RoutePath } from "../../common/enums";

const replies: ReplyModel[] = [
  {
    commentId: "5f105031f64edc001eef4abb",
    replyId: "5f10dca328a306001e18b298",
    ownerId: "you@gmail.com",
    content:
      "Good morning James. That’s right. I will see you then at the Cocoa Wah Wah.",
    numOfVotes: 0,
    numOfUpVotes: 0,
    numOfDownVotes: 0,
    numOfFlags: 0,
    createdAt: "2020-07-16T22:04:56.945Z",
    updatedAt: "2020-07-17T17:47:10.895Z",
  },
];

const comment: CommentModel = {
  commentId: "5f105031f64edc001eef4abb",
  applicationId: "5f0f51f71b6c9f001ec13f88",
  ownerId: "you@gmail.com",
  content:
    "Hey, I hope that you are well. I was just looking to confirm our meeting for 10am sharp this morning. Please get back to me as soon as you get this.",
  numOfVotes: 0,
  numOfUpVotes: 0,
  numOfDownVotes: 0,
  numOfFlags: 0,
  numOfReplies: 1,
  createdAt: "2020-07-16T13:03:45.782Z",
  updatedAt: "2020-07-17T18:45:04.551Z",
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box pt={6}>
          <Typography variant="h2" align="center">
            Unleash the Potential of Comments
          </Typography>
        </Box>
        <Box pt={2}>
          <Typography variant="body1" align="center">
            The need to elicit public opinions about predefined topics is
            widespread in the social sciences, government, and business.
          </Typography>
        </Box>
        <Box p={4}>
          <Comment comment={comment} replies={replies} />
        </Box>
        <Box pb={2} display="flex" justifyContent="center">
          <Link component={RouterLink} to={RoutePath.Comments}>
            <Button variant="contained" color="secondary">
              Live Demo
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
