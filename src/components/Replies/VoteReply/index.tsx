import React, { FunctionComponent } from "react";

import TabViewIntroSection from "../../TabViewIntroSection";

const voteComponentEndpoints = [
  "PATCH /comments/:commentId/replies/:replyId/votes/upvote",
  "PATCH /comments/:commentId/replies/:replyId/votes/downvote",
];
const voteComponentHeading = "Vote on a reply";
const voteComponentSubtitle =
  "Was it a really good reply? Show your appreciation.";

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
