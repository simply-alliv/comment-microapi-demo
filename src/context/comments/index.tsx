import React, { FunctionComponent, createContext, useReducer } from "react";
import { Comment, Reply } from "../../common/models";
import { CommentsActionType } from "../../common/enums";
import { mockComments } from "./mock";

// State
interface State {
  comments: Comment[];
  replies: Reply[];
}

const initialState: State = {
  comments: mockComments,
  replies: [],
};

// Creat Context Object
export const CommentsContext = createContext<
  [State, React.Dispatch<{ type: CommentsActionType }>]
>([initialState, () => null]);

const reducer = (state: State, action: any) => {
  switch (action.type) {
    // Comments reducers
    case CommentsActionType.CREATE_COMMENT:
      console.log("Create Comment");
      return state;

    case CommentsActionType.UPDATE_COMMENT:
      console.log("Update Comment");
      return state;

    case CommentsActionType.FLAG_COMMENT:
      console.log("Flag Comment");
      return state;

    case CommentsActionType.VOTE_COMMENT:
      console.log("Vote Comment");
      return state;

    case CommentsActionType.DELETE_COMMENT:
      console.log("Delete Comment");
      return state;

    case CommentsActionType.RESET_STATE:
      console.log("Reset State");
      return initialState;

    // Replies reducers
    case CommentsActionType.CREATE_REPLY:
      console.log("Create Reply");
      return state;

    case CommentsActionType.UPDATE_REPLY:
      console.log("Update Reply");
      return state;

    case CommentsActionType.FLAG_REPLY:
      console.log("Flag Reply");
      return state;

    case CommentsActionType.VOTE_REPLY:
      console.log("Vote Reply");
      return state;

    case CommentsActionType.DELETE_REPLY:
      console.log("Delete Reply");
      return state;

    default:
      throw new Error();
  }
};

type CommentsContextProviderProps = {
  children?: React.ReactNode;
};
// Create a provider for components to consume and subscribe to changes
export const CommentsContextProvider: FunctionComponent<CommentsContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CommentsContext.Provider value={[state, dispatch]}>
      {children}
    </CommentsContext.Provider>
  );
};
