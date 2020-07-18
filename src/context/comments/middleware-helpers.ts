import React from "react";
import { Comment, Reply } from "../../common/models";
import { CommentsResultType } from "../../common/enums";

/**
 * Provides helper functions for dispatch middleware.
 */
class DispatchMiddlewareHelper {
  constructor(private dispatch: React.Dispatch<any>) {}

  setSelectedCommentDialogOpen(isOpen: boolean) {
    this.dispatch({
      type: CommentsResultType.SET_SELECTED_COMMENT_DIALOG_OPEN,
      payload: { isOpen },
    });
  }

  addComment(comment: Comment) {
    this.dispatch({
      type: CommentsResultType.ADD_COMMENT,
      payload: { comment },
    });
  }

  addComments(comments: Comment[]) {
    this.dispatch({
      type: CommentsResultType.ADD_COMMENTS,
      payload: { comments },
    });
  }

  updateComment(updatedComment: Comment) {
    this.dispatch({
      type: CommentsResultType.UPDATE_COMMENT,
      payload: { updatedComment },
    });
  }

  removeComment(commentId: string) {
    this.dispatch({
      type: CommentsResultType.REMOVE_COMMENT,
      payload: { commentId },
    });
  }

  addReply(commentId: string, reply: Reply) {
    this.dispatch({
      type: CommentsResultType.ADD_REPLY,
      payload: { commentId, reply },
    });
  }

  addReplies(commentId: string | undefined, replies: Reply[]) {
    this.dispatch({
      type: CommentsResultType.ADD_REPLIES,
      payload: {
        commentId,
        replies,
      },
    });
  }

  updateReply(commentId: string, updatedReply: Reply) {
    this.dispatch({
      type: CommentsResultType.UPDATE_REPLY,
      payload: {
        commentId,
        updatedReply,
      },
    });
  }

  removeReply(commentId: string, replyId: string) {
    this.dispatch({
      type: CommentsResultType.REMOVE_REPLY,
      payload: { commentId, replyId },
    });
  }
}

export default DispatchMiddlewareHelper;
