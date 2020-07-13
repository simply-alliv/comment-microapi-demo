import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Comment, { CommentProps } from "../Comment";
import { ReplyProps } from "../Comment/Reply";

const replies: ReplyProps[] = [
  {
    name: "Mary A",
    content:
      "Good morning James. That’s right. I will see you then at the Cocoa Wah Wah.",
    creationDate: new Date(Date.parse("2020-07-13T21:40:00")),
  },
];

const comment: CommentProps = {
  name: "James James",
  content: `Hey, I hope that you are well. I was just looking to confirm our
  meeting for 10am sharp this morning. Please get back to me as soon
  as you get this.`,
  creationDate: new Date(Date.parse("2020-07-13T18:40:00")),
  replies,
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
          <Comment
            name={comment.name}
            content={comment.content}
            creationDate={comment.creationDate}
            replies={comment.replies}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
