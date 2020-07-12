import React, { FunctionComponent, ReactElement } from "react";
import TabViewsContainer from "../TabViewsContainer";
import CreateReply from "./CreateReply";
import GetReply from "./GetReply";
import UpdateReply from "./UpdateReply";
import DeleteReply from "./DeleteReply";
import VoteReply from "./VoteReply";
import FlagReply from "./FlagReply";

const tabLabels: string[] = [
  "Reply Create",
  "Reply Get",
  "Reply Update",
  "Reply Delete",
  "Reply Vote",
  "Reply Flag",
];

const tabViews: ReactElement[] = [
  <CreateReply />,
  <GetReply />,
  <UpdateReply />,
  <DeleteReply />,
  <VoteReply />,
  <FlagReply />,
];

const Replies: FunctionComponent = () => {
  return (
    <TabViewsContainer
      tabLabels={tabLabels}
      tabViews={tabViews}
    ></TabViewsContainer>
  );
};

export default Replies;
