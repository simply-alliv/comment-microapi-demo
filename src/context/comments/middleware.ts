import React from "react";
import CommentService from "../../services/comment";
import { CommentsActionType, CommentsResultType } from "../../common/enums";
import { Comment } from "../../common/models";

const commentService = new CommentService();
commentService.initializeState();

/**
 * Middleware for dispatch which performs the async operations of the CommentSDK, if and
 * when required, and then calls the actual dispatch with the results.
 *
 * @param dispatch - the dispatch function
 */
const dispatchMiddleware = (dispatch: React.Dispatch<any>) => {
  return (action: any) => {
    switch (action.type) {
      case CommentsActionType.CREATE_COMMENT:
        setLoading(dispatch);

        commentService
          .createComment(action.payload)
          .then((response: any) => {
            dispatch({
              type: CommentsResultType.NEW_COMMENT,
              payload: mapDataToComment(response.data),
            });
          })
          .catch((error: any) => {
            console.log(error);
          });
        break;

      default:
        return dispatch(action);
    }
  };
};

export default dispatchMiddleware;

/**
 * Dispatches a loading state to the reducer.
 */
const setLoading = (dispatch: any) => {
  dispatch({
    type: CommentsResultType.SET_LOADING,
  });
};

/**
 * Returns a Comment from the response's data object.
 */
const mapDataToComment = (data: any) => {
  return new Comment(
    data.applicationId,
    data.commentId,
    data.ownerId,
    data.content,
    data.numOfVotes,
    data.numOfUpVotes,
    data.numOfDownVotes,
    data.numOfFlags,
    data.numOfReplies,
    data.createdAt,
    data.updatedAt
  );
};
