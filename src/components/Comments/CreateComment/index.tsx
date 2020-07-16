import React, { FunctionComponent, useContext } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import TabViewIntroSection from "../../TabViewIntroSection";
import { CommentsContext } from "../../../context/comments";
import { CommentsActionType } from "../../../common/enums";

const createComponentEndpoints = ["POST /comments"];
const createComponentHeading = "Create a comment";
const createComponentSubtitle =
  "The first step is to always create the comment.";

const CreateComment: FunctionComponent = () => {
  const [state, dispatch] = useContext(CommentsContext);
  let content = "";

  return (
    <React.Fragment>
      <TabViewIntroSection
        endpoints={createComponentEndpoints}
        heading={createComponentHeading}
        subtitle={createComponentSubtitle}
      ></TabViewIntroSection>
      <Box mt={6}>
        <Typography variant="body2" align="center" color="textSecondary">
          What are you thinking about? Write it in the box below.
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" mt={1}>
        <TextareaAutosize
          rowsMin={5}
          rowsMax={5}
          onChange={(event: any) => {
            console.log(event.target.value);
            content = event.target.value;
          }}
        ></TextareaAutosize>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            dispatch({
              type: CommentsActionType.CREATE_COMMENT,
              payload: {
                userId: "you@gmail.com",
                content,
              },
            })
          }
        >
          {state.loading ? "Loading..." : "Create Comment"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateComment;
