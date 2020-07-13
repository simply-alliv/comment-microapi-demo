import React, { FunctionComponent } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";

const updateComponentEndpoints = [
  "PATCH /comments/:commentId/replies/:replyId",
];
const updateComponentHeading = "Update a reply";
const updateComponentSubtitle = "Sometimes we need to make some changes.";

const UpdateReply: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={updateComponentEndpoints}
        heading={updateComponentHeading}
        subtitle={updateComponentSubtitle}
      ></TabViewIntroSection>
    </React.Fragment>
  );
};

export default UpdateReply;
