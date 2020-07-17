import React, {
  FunctionComponent,
  createContext,
  useReducer,
  useEffect,
} from "react";
import dispatchMiddleware from "./middleware";
import { Comment, Reply } from "../../common/models";
import { CommentsActionType, CommentsResultType } from "../../common/enums";

// State
export interface State {
  comments: Comment[];
  replies: Reply[];
  commentsLoaded: boolean;
  repliesLoaded: boolean;
  loading: boolean;
}

const initialState: State = {
  comments: [],
  replies: [],
  commentsLoaded: false,
  repliesLoaded: false,
  loading: false,
};

// Creat Context Object
export const CommentsContext = createContext<
  [State, React.Dispatch<{ type: CommentsActionType; payload?: any }>]
>([initialState, () => null]);

const reducer = (state: State, action: any) => {
  // The reducer can be called twice for the same dispatch so a check to see
  // if the comment or reply has been added already is required.
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

  const replyExists = (commentId: string, replyId: string): boolean => {
    let existingReply = undefined;

    if (commentExists(commentId)) {
      existingReply = state.replies.find((reply) => reply.replyId === replyId);
    }

    return existingReply ? true : false;
  };

  // The switch block for the reducer actions.
  switch (action.type) {
    // Comments reducers
    case CommentsResultType.ADD_COMMENT: {
      const comment = action.payload.comment;

      if (!commentExists(comment.commentId)) {
        state.comments.push(comment);
      }

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.ADD_COMMENTS: {
      const comments = action.payload.comments;

      comments.forEach((comment: Comment) => {
        if (!commentExists(comment.commentId)) {
          state.comments.push(comment);
        }
      });

      const updatedState = {
        ...state,
        commentsLoaded: true,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.UPDATE_COMMENT: {
      const updatedComment = action.payload.updatedComment;
      if (commentExists(updatedComment.commentId)) {
        state.comments.forEach((comment, index) => {
          if (comment.commentId === updatedComment.commentId) {
            state.comments.splice(index, 1, updatedComment);
          }
        });
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

    // Replies reducers
    case CommentsResultType.ADD_REPLY: {
      const { commentId, reply } = action.payload;
      if (!replyExists(commentId, reply.replyId)) {
        state.replies.push(reply);
      }

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.ADD_REPLIES: {
      const { commentId, replies } = action.payload;

      replies.forEach((reply: Reply) => {
        if (!replyExists(commentId, reply.replyId)) {
          state.replies.push(reply);
        }
      });

      const updatedState = {
        ...state,
        repliesLoaded: true,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.UPDATE_REPLY: {
      const { commentId, updatedReply } = action.payload;

      if (replyExists(commentId, updatedReply.replyId)) {
        state.replies.forEach((reply, index) => {
          if (reply.replyId === updatedReply.replyId) {
            state.replies.splice(index, 1, updatedReply);
          }
        });
      }

      const updatedState = {
        ...state,
        loading: false,
      };

      return updatedState;
    }

    case CommentsResultType.REMOVE_REPLY: {
      const { commentId, replyId } = action.payload;

      if (!replyExists(commentId, replyId)) {
        state.replies.filter((reply) => reply.replyId !== replyId);
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
    if (!(state.commentsLoaded && state.repliesLoaded)) {
      const dispatchMW = dispatchMiddleware(dispatch);

      dispatchMW({ type: CommentsActionType.INIT_STATE });
    }
  }, [state.commentsLoaded, state.repliesLoaded]);

  return (
    <CommentsContext.Provider value={[state, dispatchMiddleware(dispatch)]}>
      {children}
    </CommentsContext.Provider>
  );
};
