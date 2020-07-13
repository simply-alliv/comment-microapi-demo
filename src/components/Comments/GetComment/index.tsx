import React, { FunctionComponent } from "react";
import AllComments from "./AllComments";
import SingleComment from "./SingleComment";

const GetComment: FunctionComponent = () => {
  return (
    <React.Fragment>
      <AllComments />
      <SingleComment />
    </React.Fragment>
  );
};

export default GetComment;
