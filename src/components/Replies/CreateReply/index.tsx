import React, { FunctionComponent } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";

const createComponentEndpoints = ["POST /comments/:commentId/replies"];
const createComponentHeading = "Create a reply";
const createComponentSubtitle = "Comments can always be responded to.";

const CreateReply: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={createComponentEndpoints}
        heading={createComponentHeading}
        subtitle={createComponentSubtitle}
      ></TabViewIntroSection>
    </React.Fragment>
  );
};

export default CreateReply;
