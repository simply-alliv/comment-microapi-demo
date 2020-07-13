import React, { FunctionComponent } from "react";
import AllReplies from "./AllReplies";
import SingleReply from "./SingleReply";


const GetReply: FunctionComponent = () => {
  return (
    <React.Fragment>
      <AllReplies />
      <SingleReply />
    </React.Fragment>
  );
};

export default GetReply;
