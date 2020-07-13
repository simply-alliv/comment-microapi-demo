import React, { FunctionComponent } from "react";
import TabViewIntroSection from "../../TabViewIntroSection";

const deleteComponentEndpoints = ["DELETE /comments/:commentId"];
const deleteComponentHeading = "Delete a comment";
const deleteComponentSubtitle =
  "Then there are those times where deletion is required.";

const DeleteComment: FunctionComponent = () => {
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

export default DeleteComment;
