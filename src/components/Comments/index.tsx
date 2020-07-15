import React, { FunctionComponent, ReactElement } from "react";
import TabPanel from "../TabPanel";
import CreateComment from "./CreateComment";
import GetComment from "./GetComment";
import UpdateComment from "./UpdateComment";
import DeleteComment from "./DeleteComment";
import VoteComment from "./VoteComment";
import FlagComment from "./FlagComment";
import StateFooter from "../StateFooter";
import mockCommentProps from "../../context/comments/mock-comment-props"

export const tabLabels: string[] = [
  "Comment Create",
  "Comment Get",
  "Comment Update",
  "Comment Delete",
  "Comment Vote",
  "Comment Flag",
];

export const tabViews: ReactElement[] = [
  <CreateComment />,
  <GetComment />,
  <UpdateComment />,
  <DeleteComment />,
  <VoteComment />,
  <FlagComment />,
];

type CommentsProps = {
  tabValueState: [any, React.Dispatch<React.SetStateAction<any>>];
};

const Comments: FunctionComponent<CommentsProps> = ({ tabValueState }) => {
  return (
    <React.Fragment>
      {tabViews.map((element, index) => {
        return (
          <TabPanel
            key={tabLabels[index]}
            tabIndex={index}
            activeTabIndex={tabValueState[0]}
          >
            {element}
          </TabPanel>
        );
      })}
      <StateFooter comments={mockCommentProps} />
    </React.Fragment>
  );
};

export default Comments;
