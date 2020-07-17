import CommentSDK from "comments-microapi-sdk";
import { Comment, Reply } from "../../common/models";

class CommentService {
  private sdkInstance: any;
  private ownerId: string = "";

  constructor() {
    this.sdkInstance = new CommentSDK(
      process.env.REACT_APP_COMMENTS_API_APP_TOKEN
    );
    this.sdkInstance.init();
  }

  async initializeState(ownerId: string) {
    this.ownerId = ownerId;
  }

  getAllComments(pageQuery?: any): Promise<Comment[]> {
    return this.sdkInstance.getAllComments(pageQuery).then((response: any) => {
      return response.records.map((record: any) =>
        this.mapDataToComment(record)
      );
    });
  }

  getSingleComment(commentId: string): Promise<Comment> {
    return this.sdkInstance
      .getSingleComment(commentId)
      .then((response: any) => {
        return this.mapDataToComment(response.data);
      });
  }

  getSingleCommentVotes(commentId: string): any {
    return this.sdkInstance.getCommentVotes(commentId);
  }

  createSingleComment(createCommentDTO: { content: string }): Promise<Comment> {
    return this.sdkInstance
      .createComment({
        ...createCommentDTO,
        ownerId: this.ownerId,
      })
      .then((response: any) => {
        return this.mapDataToComment(response.data);
      });
  }

  updateSingleComment(
    commentId: string,
    updateCommentDTO: { content: string }
  ): any {
    return this.sdkInstance.updateCommentContent(commentId, {
      ...updateCommentDTO,
      ownerId: this.ownerId,
    });
  }

  deleteSingleComment(commentId: string): any {
    return this.sdkInstance.deleteSingleComment(commentId, this.ownerId);
  }

  upvoteSingleComment(commentId: string): any {
    return this.sdkInstance.upvoteSingleComment(commentId, this.ownerId);
  }

  downvoteSingleComment(commentId: string): any {
    return this.sdkInstance.downvoteSingleComment(commentId, this.ownerId);
  }

  flagSingleComment(commentId: string): any {
    return this.sdkInstance.flagComment(commentId, this.ownerId);
  }

  /** REPLIES */
  getAllReplies(commentId: string, pageQuery?: any): Promise<Reply[]> {
    return this.sdkInstance
      .getAllReplies(commentId, pageQuery)
      .then((response: any) => {
        return response.records.map((record: any) =>
          this.mapDataToReply(record)
        );
      });
  }

  getSingleReply(commentId: string, replyId: string): Promise<Reply> {
    return this.sdkInstance
      .getSingleReply(commentId, replyId)
      .then((response: any) => {
        return this.mapDataToReply(response.data);
      });
  }

  getSingleReplyVotes(commentId: string, replyId: string): any {
    return this.sdkInstance.getReplyVotes(commentId, replyId);
  }

  createSingleReply(
    commentId: string,
    createReplyDTO: { content: string }
  ): Promise<Reply> {
    return this.sdkInstance
      .createReply(commentId, {
        ...createReplyDTO,
        ownerId: this.ownerId,
      })
      .then((response: any) => {
        return this.mapDataToReply(response.data);
      });
  }

  updateSingleReply(
    commentId: string,
    replyId: string,
    updateReplyDTO: { content: string }
  ): any {
    return this.sdkInstance.updateReplyContent(commentId, replyId, {
      ...updateReplyDTO,
      ownerId: this.ownerId,
    });
  }

  deleteSingleReply(commentId: string, replyId: string): any {
    return this.sdkInstance.deleteSingleReply(commentId, replyId);
  }

  upvoteSingleReply(commentId: string, replyId: string): any {
    return this.sdkInstance.upvoteSingleReply(commentId, replyId, this.ownerId);
  }

  downvoteSingleReply(commentId: string, replyId: string): any {
    return this.sdkInstance.downvoteSingleReply(
      commentId,
      replyId,
      this.ownerId
    );
  }

  flagSingleReply(commentId: string, replyId: string): any {
    return this.sdkInstance.flagReply(commentId, replyId, this.ownerId);
  }

  private mapDataToComment = (data: any) => {
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

  private mapDataToReply = (data: any) => {
    return new Reply(
      data.commentId,
      data.replyId,
      data.ownerId,
      data.content,
      data.numOfVotes,
      data.numOfUpVotes,
      data.numOfDownVotes,
      data.numOfFlags,
      data.createdAt,
      data.updatedAt
    );
  };
}

export default CommentService;
