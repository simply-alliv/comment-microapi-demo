import React, { FunctionComponent, ReactElement, useContext } from "react";
import TabPanel from "../TabPanel";
import CreateReply from "./CreateReply";
import GetReply from "./GetReply";
import UpdateReply from "./UpdateReply";
import DeleteReply from "./DeleteReply";
import VoteReply from "./VoteReply";
import FlagReply from "./FlagReply";
import StateFooter from "../StateFooter";
import LoadingScreen from "../LoadingScreen";
import { CommentsContext } from "../../context/comments";

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
        <LoadingScreen></LoadingScreen>
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
      <StateFooter />
    </React.Fragment>
  );
};

export default Replies;
