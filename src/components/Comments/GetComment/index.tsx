import React, { FunctionComponent } from "react";
import AllComments from "./AllComments/index";
import SingleComment from "./SingleComment/index";

const GetComment: FunctionComponent = () => {
  return (
    <React.Fragment>
      <AllComments />
      <SingleComment />
    </React.Fragment>
  );
};

export default GetComment;
