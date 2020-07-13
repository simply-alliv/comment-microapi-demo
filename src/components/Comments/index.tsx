import React, { FunctionComponent, ReactElement } from "react";
import TabViewsContainer from "../TabViewsContainer";
import CreateComment from "./CreateComment";
import GetComment from "./GetComment";
import UpdateComment from "./UpdateComment";
import DeleteComment from "./DeleteComment";
import VoteComment from "./VoteComment";
import FlagComment from "./FlagComment";
import StateFooter from "../StateFooter";

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
      <TabViewsContainer
        tabLabels={tabLabels}
        tabViews={tabViews}
        tabValueState={tabValueState}
      ></TabViewsContainer>
      <StateFooter />
    </React.Fragment>
  );
};

export default Comments;
