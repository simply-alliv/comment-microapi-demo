import React from "react";
import CommentService from "../../services/comment";
import { CommentsActionType, CommentsResultType } from "../../common/enums";

const commentService = new CommentService();
commentService.initializeState("you@gmail.com");

/**
 * Middleware for dispatch which performs the async operations of the CommentSDK, if and
 * when required, and then calls the actual dispatch with the results.
 *
 * @param dispatch - the dispatch function
 */
const dispatchMiddleware = (dispatch: React.Dispatch<any>) => {
  return async (action: any) => {
    switch (action.type) {
      /**
       * Get all comments dispatch middleware
       */
      case CommentsActionType.GET_ALL_COMMENTS: {
        setLoading(true, dispatch);

        try {
          const allComments = await commentService.getAllComments(
            action.payload
          );

          dispatch({
            type: CommentsResultType.ADD_COMMENTS,
            payload: allComments,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Get comment dispatch middleware
       */
      case CommentsActionType.GET_COMMENT: {
        setLoading(true, dispatch);

        try {
          const comment = await commentService.getSingleComment(action.payload);

          dispatch({
            type: CommentsResultType.ADD_COMMENT,
            payload: comment,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Create comment dispatch middleware
       */
      case CommentsActionType.CREATE_COMMENT: {
        setLoading(true, dispatch);

        try {
          const comment = await commentService.createSingleComment(
            action.payload
          );

          dispatch({
            type: CommentsResultType.ADD_COMMENT,
            payload: comment,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Update comment dispatch middleware
       */
      case CommentsActionType.UPDATE_COMMENT: {
        setLoading(true, dispatch);

        try {
          const { commentId, updateCommentDTO } = action.payload;
          await commentService.updateSingleComment(commentId, updateCommentDTO);
          const updatedComment = await commentService.getSingleComment(
            action.payload.commentId
          );

          dispatch({
            type: CommentsResultType.UPDATE_COMMENT,
            payload: updatedComment,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Delete comment dispatch middleware
       */
      case CommentsActionType.DELETE_COMMENT: {
        setLoading(true, dispatch);

        try {
          await commentService.deleteSingleComment(action.payload.commentId);

          dispatch({
            type: CommentsResultType.REMOVE_COMMENT,
            payload: action.payload,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Upvote comment dispatch middleware
       */
      case CommentsActionType.UPVOTE_COMMENT: {
        setLoading(true, dispatch);

        try {
          await commentService.upvoteSingleComment(action.payload.commentId);
          const updatedComment = await commentService.getSingleComment(
            action.payload.commentId
          );

          dispatch({
            type: CommentsResultType.UPDATE_COMMENT,
            payload: updatedComment,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Downvote comment dispatch middleware
       */
      case CommentsActionType.DOWNVOTE_COMMENT: {
        setLoading(true, dispatch);

        try {
          await commentService.downvoteSingleComment(action.payload.commentId);
          const updatedComment = await commentService.getSingleComment(
            action.payload.commentId
          );

          dispatch({
            type: CommentsResultType.UPDATE_COMMENT,
            payload: updatedComment,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Flag comment dispatch middleware
       */
      case CommentsActionType.FLAG_COMMENT: {
        setLoading(true, dispatch);

        try {
          await commentService.flagSingleComment(action.payload.commentId);
          const updatedComment = await commentService.getSingleComment(
            action.payload.commentId
          );

          dispatch({
            type: CommentsResultType.UPDATE_COMMENT,
            payload: updatedComment,
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      default:
        return dispatch(action);
    }
  };
};

export default dispatchMiddleware;

/**
 * Dispatches a loading state to the reducer.
 */
const setLoading = (isLoading: boolean, dispatch: any) => {
  dispatch({
    type: CommentsResultType.SET_LOADING,
    payload: { loading: isLoading },
  });
};
