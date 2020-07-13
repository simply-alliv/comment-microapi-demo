import React, { FunctionComponent } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";

const flagComponentEndpoints = [
  "PATCH /comments/:commentId/replies/:replyId/flag",
];
const flagComponentHeading = "Flag a reply";
const flagComponentSubtitle = "Didn’t like a reply? Do something about it.";

const FlagReply: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={flagComponentEndpoints}
        heading={flagComponentHeading}
        subtitle={flagComponentSubtitle}
      ></TabViewIntroSection>
    </React.Fragment>
  );
};

export default FlagReply;
