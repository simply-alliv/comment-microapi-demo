import React, { FunctionComponent, ReactElement } from "react";
import TabPanel from "../TabPanel";
import CreateComment from "./CreateComment";
import GetComment from "./GetComment";
import UpdateComment from "./UpdateComment";
import DeleteComment from "./DeleteComment";
import VoteComment from "./VoteComment";
import FlagComment from "./FlagComment";
import StateFooter from "../StateFooter";

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
      <StateFooter />
    </React.Fragment>
  );
};

export default Comments;
