import CommentSDK from "comments-microapi-sdk";
import { Comment } from "../../common/models";

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

  getAllComments(pageQuery?: any): Comment[] {
    return this.sdkInstance.getAllComments(pageQuery).then((response: any) => {
      return response.records.map((record: any) =>
        this.mapDataToComment(record)
      );
    });
  }

  getSingleComment(commentId: string): Comment {
    return this.sdkInstance.getSingleComment(commentId);
  }

  getSingleCommentVotes(commentId: string): any {
    return this.sdkInstance.getCommentVotes(commentId);
  }

  createSingleComment(createCommentDTO: { content: string }): Promise<Comment> {
    return this.sdkInstance
      .createComment({
        ...createCommentDTO,
        userId: this.ownerId,
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
      userId: this.ownerId,
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
}

export default CommentService;
