import { CommentProps } from "../../components/Comment";
import { ReplyProps } from "../../components/Comment/Reply";

const mockReplyProps: ReplyProps[] = [
  {
    name: "Mary A",
    content:
      "Good morning James. That’s right. I will see you then at the Cocoa Wah Wah.",
    creationDate: new Date(Date.parse("2020-07-13T21:40:00")),
  },
  {
    name: "Steven G",
    content:
      "Hey James, I'm sorry I have to take a raincheck, hope you don't mind.",
    creationDate: new Date(Date.parse("2020-07-14T10:40:00")),
  },
];

const mockCommentProps: CommentProps[] = [
  {
    name: "James James",
    content: `Hey, I hope that you are well. I was just looking to confirm our
    meeting for 10am sharp this morning. Please get back to me as soon
    as you get this.`,
    creationDate: new Date(Date.parse("2020-07-13T18:40:00")),
    replies: mockReplyProps,
  },
];

export default mockCommentProps;
