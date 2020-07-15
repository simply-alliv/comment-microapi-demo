import React, { FunctionComponent, ReactElement } from "react";
import TabPanel from "../TabPanel";
import CreateReply from "./CreateReply";
import GetReply from "./GetReply";
import UpdateReply from "./UpdateReply";
import DeleteReply from "./DeleteReply";
import VoteReply from "./VoteReply";
import FlagReply from "./FlagReply";
import StateFooter from "../StateFooter";
import mockCommentProps from "../../context/comments/mock-comment-props";

export const tabViews: ReactElement[] = [
  <CreateReply />,
  <GetReply />,
  <UpdateReply />,
  <DeleteReply />,
  <VoteReply />,
  <FlagReply />,
];

type RepliesProps = {
  tabValueState: [number, React.Dispatch<React.SetStateAction<number>>];
};

const Replies: FunctionComponent<RepliesProps> = ({ tabValueState }) => {
  return (
    <React.Fragment>
      {tabViews.map((element, index) => {
        return (
          <TabPanel
            key={index}
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

export default Replies;
