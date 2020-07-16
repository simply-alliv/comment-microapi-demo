import React, {
  FunctionComponent,
  createContext,
  useReducer,
  useEffect,
} from "react";
import dispatchMiddleware from "./middleware";
import { Comment, Reply } from "../../common/models";
import { CommentsActionType, CommentsResultType } from "../../common/enums";
import { mockComments } from "./mock";

// State
interface State {
  comments: Comment[];
  replies: Reply[];
  loading: boolean;
}

const initialState: State = {
  comments: mockComments,
  replies: [],
  loading: false,
};

// Creat Context Object
export const CommentsContext = createContext<
  [State, React.Dispatch<{ type: CommentsActionType; payload?: any }>]
>([initialState, () => null]);

const reducer = (state: State, action: any) => {
  switch (action.type) {
    // Comments reducers
    case CommentsResultType.NEW_COMMENT: {
      state.comments.push(action.payload);

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.NEW_COMMENTS: {
      action.payload.forEach((comment: any) => {
        state.comments.push(comment);
      });

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.SET_LOADING: {
      const updatedState = {
        ...state,
        loading: true,
      };

      return updatedState;
    }

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

  useEffect(() => {
    // if ()
  });

  return (
    <CommentsContext.Provider value={[state, dispatchMiddleware(dispatch)]}>
      {children}
    </CommentsContext.Provider>
  );
};
