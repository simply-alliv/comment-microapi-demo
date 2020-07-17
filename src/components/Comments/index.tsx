import React, { FunctionComponent, ReactElement, useContext } from "react";
import TabPanel from "../TabPanel";
import CreateComment from "./CreateComment";
import GetComment from "./GetComment";
import UpdateComment from "./UpdateComment";
import DeleteComment from "./DeleteComment";
import VoteComment from "./VoteComment";
import FlagComment from "./FlagComment";
import StateFooter from "../StateFooter";
import { CommentsContext } from "../../context/comments";

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
  tabValueState: [number, React.Dispatch<React.SetStateAction<number>>];
};

const Comments: FunctionComponent<CommentsProps> = ({ tabValueState }) => {
  const state = useContext(CommentsContext)[0];

  return (
    <React.Fragment>
      {!state.commentsLoaded && state.loading ? (
        <React.Fragment></React.Fragment>
      ) : (
        state.commentsLoaded &&
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
      <StateFooter />
    </React.Fragment>
  );
};

export default Comments;
