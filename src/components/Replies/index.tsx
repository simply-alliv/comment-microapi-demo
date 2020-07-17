import React, { FunctionComponent, ReactElement, useContext } from "react";
import TabPanel from "../TabPanel";
import CreateReply from "./CreateReply";
import GetReply from "./GetReply";
import UpdateReply from "./UpdateReply";
import DeleteReply from "./DeleteReply";
import VoteReply from "./VoteReply";
import FlagReply from "./FlagReply";
import StateFooter from "../StateFooter";
import { CommentsContext } from "../../context/comments";
import mockCommentProps from "../../context/comments/mock-comment-props";

export const tabLabels: string[] = [
  "Reply Create",
  "Reply Get",
  "Reply Update",
  "Reply Delete",
  "Reply Vote",
  "Reply Flag",
];

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
  const state = useContext(CommentsContext)[0];

  return (
    <React.Fragment>
      {!state.repliesLoaded && state.loading ? (
        <React.Fragment></React.Fragment>
      ) : (
        state.repliesLoaded &&
        tabViews.map((element, index) => {
          return (
            <TabPanel
              key={tabLabels[index]}
              tabIndex={index}
              activeTabIndex={tabValueState[0]}
            >
              {element}
            </TabPanel>
          );
        })
      )}
      <StateFooter comments={mockCommentProps} />
    </React.Fragment>
  );
};

export default Replies;
