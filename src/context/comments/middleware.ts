import React from "react";
import CommentService from "../../services/comment";
import { CommentsActionType, CommentsResultType } from "../../common/enums";
import { Reply } from "../../common/models";

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

          dispatch({
            type: CommentsResultType.ADD_COMMENTS,
            payload: {
              comments,
            },
          });

          const commentsReplies = await Promise.all(commentsRepliesPromises);

          commentsReplies.forEach((commentReplies, index) => {
            if (commentReplies.length > 0) {
              dispatch({
                type: CommentsResultType.ADD_REPLIES,
                payload: {
                  commentId: comments[index].commentId,
                  replies: commentReplies,
                },
              });
            }
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
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

          dispatch({
            type: CommentsResultType.ADD_COMMENTS,
            payload: { comments },
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
          const comment = await commentService.getSingleComment(
            action.payload.commentId
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
            commentId
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
          const { commentId } = action.payload;
          await commentService.deleteSingleComment(commentId);

          dispatch({
            type: CommentsResultType.REMOVE_COMMENT,
            payload: { commentId },
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
          const { commentId } = action.payload;
          await commentService.flagSingleComment(commentId);
          const updatedComment = await commentService.getSingleComment(
            commentId
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

          dispatch({
            type: CommentsResultType.ADD_REPLIES,
            payload: {
              commentId,
              replies,
            },
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
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

          dispatch({
            type: CommentsResultType.ADD_REPLY,
            payload: { commentId, reply },
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

          dispatch({
            type: CommentsResultType.ADD_REPLY,
            payload: {
              commentId,
              reply,
            },
          });

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

          dispatch({
            type: CommentsResultType.UPDATE_REPLY,
            payload: {
              commentId,
              updatedReply,
            },
          });

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

          dispatch({
            type: CommentsResultType.REMOVE_REPLY,
            payload: { commentId, replyId },
          });

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

          dispatch({
            type: CommentsResultType.UPDATE_REPLY,
            payload: { commentId, updatedReply },
          });
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

          dispatch({
            type: CommentsResultType.UPDATE_REPLY,
            payload: { commentId, updatedReply },
          });
        } catch (error) {
          setLoading(false, dispatch);
          console.log(error);
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

          dispatch({
            type: CommentsResultType.UPDATE_REPLY,
            payload: { commentId, updatedReply },
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
