import React, { FunctionComponent } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";

const deleteComponentEndpoints = [
  "DELETE /comments/:commentId/replies/:replyId",
];
const deleteComponentHeading = "Delete a reply";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const DeleteReply: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={deleteComponentEndpoints}
        heading={deleteComponentHeading}
        subtitle={deleteComponentSubtitle}
      ></TabViewIntroSection>
    </React.Fragment>
  );
};

export default DeleteReply;
