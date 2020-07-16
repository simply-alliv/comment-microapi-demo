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
  // The reducer can be called twice for the same dispatch so a check to see
  // if the comment has been added already is required.
  //
  // Proper fix needed.
  //
  // See issue: https://github.com/facebook/react/issues/16295
  const commentExists = (commentId: string): boolean => {
    const existingComment = state.comments.find(
      (comment) => comment.commentId === commentId
    );

    return existingComment ? true : false;
  };

  // The switch block for the reducer actions.
  switch (action.type) {
    // Comments reducers
    case CommentsResultType.ADD_COMMENT: {
      if (!commentExists(action.payload.commentId)) {
        state.comments.push(action.payload);
      }

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.ADD_COMMENTS: {
      action.payload.forEach((comment: Comment) => {
        if (!commentExists(comment.commentId)) {
          state.comments.push(comment);
        }
      });

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.UPDATE_COMMENT: {
      if (!commentExists(action.payload.commentId)) {
        const commentIndex = state.comments.indexOf(action.payload);

        if (commentIndex !== -1) {
          state.comments.splice(commentIndex, 1, action.payload);
        }
      }

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.REMOVE_COMMENT: {
      if (!commentExists(action.payload.commentId)) {
        state.comments.filter(
          (comment) => comment.commentId !== action.payload.commentId
        );
      }

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.SET_LOADING: {
      const updatedState = {
        ...state,
        loading: action.payload.loading,
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
