import React from "react";
import CommentService from "../../services/comment";
import { CommentsActionType, CommentsResultType } from "../../common/enums";
import { Reply } from "../../common/models";
import DispatchMiddlewareHelper from "./middleware-helpers";

const commentService = new CommentService();
commentService.initializeState("you@gmail.com");

let helper: DispatchMiddlewareHelper;

/**
 * Middleware for dispatch which performs the async operations of the CommentSDK, if and
 * when required, and then calls the actual dispatch with the results.
 *
 * @param dispatch - the dispatch function
 */
const dispatchMiddleware = (dispatch: React.Dispatch<any>) => {
  return async (action: any) => {
    if (!helper) {
      helper = new DispatchMiddlewareHelper(dispatch);
    }

    switch (action.type) {
      /**
       * Initialize all comments and replies dispatch middleware
       */
      case CommentsActionType.INIT_STATE: {
        setLoading(true, dispatch);

        try {
          const comments = await commentService.getAllComments(action.payload);

          const commentsRepliesPromises: Promise<Reply[]>[] = [];

          comments.forEach((comment) => {
            commentsRepliesPromises.push(
              commentService.getAllReplies(comment.commentId)
            );
          });

          helper.addComments(comments);

          const commentsReplies = await Promise.all(commentsRepliesPromises);

          commentsReplies.forEach((commentReplies, index) => {
            if (commentReplies.length > 0) {
              helper.addReplies(commentReplies[0].commentId, commentReplies);
            }
          });
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Get all comments dispatch middleware
       */
      case CommentsActionType.GET_ALL_COMMENTS: {
        setLoading(true, dispatch);

        try {
          const comments = await commentService.getAllComments(action.payload);
          helper.addComments(comments);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Get comment dispatch middleware
       */
      case CommentsActionType.GET_COMMENT: {
        setLoading(true, dispatch);

        try {
          const commentId = action.payload.commentId;
          const comment = await commentService.getSingleComment(commentId);
          helper.addComment(comment);
        } catch (error) {
          setLoading(false, dispatch);
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
          helper.addComment(comment);
        } catch (error) {
          setLoading(false, dispatch);
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
            commentId
          );
          helper.updateComment(updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Update a selected comment dispatch middleware
       */
      case CommentsActionType.UPDATE_SELECTED_COMMENT: {
        setLoading(true, dispatch);

        try {
          helper.updateSelectedComment(action.payload.updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Delete comment dispatch middleware
       */
      case CommentsActionType.DELETE_COMMENT: {
        setLoading(true, dispatch);

        try {
          const commentId = action.payload.commentId;
          await commentService.deleteSingleComment(commentId);
          helper.removeComment(commentId);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Upvote comment dispatch middleware
       */
      case CommentsActionType.UPVOTE_COMMENT: {
        setLoading(true, dispatch);

        try {
          const commentId = action.payload.commentId;
          await commentService.upvoteSingleComment(commentId);
          const updatedComment = await commentService.getSingleComment(
            commentId
          );
          helper.updateComment(updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Downvote comment dispatch middleware
       */
      case CommentsActionType.DOWNVOTE_COMMENT: {
        setLoading(true, dispatch);

        try {
          const commentId = action.payload.commentId;
          await commentService.downvoteSingleComment(commentId);
          const updatedComment = await commentService.getSingleComment(
            commentId
          );
          helper.updateComment(updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Flag comment dispatch middleware
       */
      case CommentsActionType.FLAG_COMMENT: {
        setLoading(true, dispatch);

        try {
          const commentId = action.payload.commentId;
          await commentService.flagSingleComment(commentId);
          const updatedComment = await commentService.getSingleComment(
            commentId
          );
          helper.updateComment(updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /** REPLIES */

      /**
       * Get all replies dispatch middleware
       */
      case CommentsActionType.GET_ALL_REPLIES: {
        setLoading(true, dispatch);

        try {
          const { commentId, pageQuery } = action.payload;
          const replies = await commentService.getAllReplies(
            commentId,
            pageQuery
          );
          helper.addReplies(commentId, replies);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Get reply dispatch middleware
       */
      case CommentsActionType.GET_REPLY: {
        setLoading(true, dispatch);

        try {
          const { commentId, replyId } = action.payload;
          const reply = await commentService.getSingleReply(commentId, replyId);
          helper.addReply(commentId, reply);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Create comment dispatch middleware
       */
      case CommentsActionType.CREATE_REPLY: {
        setLoading(true, dispatch);

        try {
          const { commentId, createReplyDTO } = action.payload;
          const reply = await commentService.createSingleReply(
            commentId,
            createReplyDTO
          );
          const updatedComment = await commentService.getSingleComment(
            commentId
          );
          helper.addReply(commentId, reply);
          helper.updateComment(updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Update reply dispatch middleware
       */
      case CommentsActionType.UPDATE_REPLY: {
        setLoading(true, dispatch);

        try {
          const { commentId, replyId, updateReplyDTO } = action.payload;
          await commentService.updateSingleReply(
            commentId,
            replyId,
            updateReplyDTO
          );
          const updatedReply = await commentService.getSingleReply(
            commentId,
            replyId
          );
          const updatedComment = await commentService.getSingleComment(
            commentId
          );
          helper.updateReply(commentId, updatedReply);
          helper.updateComment(updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Delete reply dispatch middleware
       */
      case CommentsActionType.DELETE_REPLY: {
        setLoading(true, dispatch);

        try {
          const { commentId, replyId } = action.payload;
          await commentService.deleteSingleReply(commentId, replyId);

          const updatedComment = await commentService.getSingleComment(
            commentId
          );

          helper.removeReply(commentId, replyId);
          helper.updateComment(updatedComment);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Upvote reply dispatch middleware
       */
      case CommentsActionType.UPVOTE_REPLY: {
        setLoading(true, dispatch);

        try {
          const { commentId, replyId } = action.payload;
          await commentService.upvoteSingleReply(commentId, replyId);
          const updatedReply = await commentService.getSingleReply(
            commentId,
            replyId
          );
          helper.updateReply(commentId, updatedReply);
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
        }

        break;
      }

      /**
       * Downvote reply dispatch middleware
       */
      case CommentsActionType.DOWNVOTE_REPLY: {
        setLoading(true, dispatch);

        try {
          const { commentId, replyId } = action.payload;
          await commentService.downvoteSingleReply(commentId, replyId);
          const updatedReply = await commentService.getSingleReply(
            commentId,
            replyId
          );
          helper.updateReply(commentId, updatedReply);
        } catch (error) {
          setLoading(false, dispatch);
        }

        break;
      }

      /**
       * Flag reply dispatch middleware
       */
      case CommentsActionType.FLAG_REPLY: {
        setLoading(true, dispatch);

        try {
          const { commentId, replyId } = action.payload;
          await commentService.flagSingleReply(commentId, replyId);
          const updatedReply = await commentService.getSingleReply(
            commentId,
            replyId
          );
          helper.updateReply(commentId, updatedReply);
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
