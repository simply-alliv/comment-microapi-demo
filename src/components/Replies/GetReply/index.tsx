import React, { FunctionComponent } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";

const getAllComponentEndpoints = ["GET /comments/:commentId/replies"];
const getAllComponentHeading = "Get all replies";
const getAllComponentSubtitle = "Need to get some replies?";

const getSingleComponentEndpoints = [
  "GET /comments/:commentId/replies/:replyId",
];
const getSingleComponentHeading = "Get a single reply";
const getSingleComponentSubtitle = "Need to get just one specific reply?";

const GetReply: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={getAllComponentEndpoints}
        heading={getAllComponentHeading}
        subtitle={getAllComponentSubtitle}
      ></TabViewIntroSection>
      <TabViewIntroSection
        endpoints={getSingleComponentEndpoints}
        heading={getSingleComponentHeading}
        subtitle={getSingleComponentSubtitle}
      ></TabViewIntroSection>
    </React.Fragment>
  );
};

export default GetReply;
