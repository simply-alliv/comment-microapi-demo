import React, { FunctionComponent, ReactElement } from "react";
import TabViewsContainer from "../TabViewsContainer";
import CreateReply from "./CreateReply";
import GetReply from "./GetReply";
import UpdateReply from "./UpdateReply";
import DeleteReply from "./DeleteReply";
import VoteReply from "./VoteReply";
import FlagReply from "./FlagReply";
import StateFooter from "../StateFooter";

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
  tabValueState: [any, React.Dispatch<React.SetStateAction<any>>];
};

const Replies: FunctionComponent<RepliesProps> = ({ tabValueState }) => {
  return (
    <React.Fragment>
      <TabViewsContainer
        tabLabels={tabLabels}
        tabViews={tabViews}
        tabValueState={tabValueState}
      ></TabViewsContainer>
      <StateFooter />
    </React.Fragment>
  );
};

export default Replies;
