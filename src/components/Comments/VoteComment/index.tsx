import React, { FunctionComponent } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";

const voteComponentEndpoints = [
  "PATCH /comments/:commentId/votes/upvote",
  "PATCH /comments/:commentId/votes/downvote",
];
const voteComponentHeading = "Vote a comment";
const voteComponentSubtitle =
  "Was a really good comment? Show your appreciation.";

const VoteComment: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={voteComponentEndpoints}
        heading={voteComponentHeading}
        subtitle={voteComponentSubtitle}
      ></TabViewIntroSection>
    </React.Fragment>
  );
};

export default VoteComment;
