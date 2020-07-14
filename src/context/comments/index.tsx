import React, { FunctionComponent, createContext, useReducer } from "react";
import { Comment } from "../../common/models";
import { CommentsActionType } from "../../common/enums";
import { mockComments } from "./mock";

// State
interface State {
  comments: Comment[];
}

const initialState: State = {
  comments: mockComments,
};

// Creat Context Object
export const CommentsContext = createContext<
  [State, React.Dispatch<{ type: CommentsActionType }>]
>([initialState, () => null]);

const reducer = (state: State, action: any) => {
  switch (action.type) {
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
