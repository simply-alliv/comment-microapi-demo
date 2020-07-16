import CommentSDK from "comments-microapi-sdk";
// import { Comment } from "../../common/models";

const commentApplicationToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbklkIjoiNWYwZjUxZjcxYjZjOWYwMDFlYzEzZjg4IiwiYWRtaW5JZCI6IjVmMGY1MWJlMWI2YzlmMDAxZWMxM2Y4NyIsImlhdCI6MTU5NDgzOTU0MywiZXhwIjoxNTk3NDMxNTQzfQ.IbeXp7eBI1E9HleuC1YjkQPa2NrXJoiFX8Is2ZHa6_A";

class CommentService {
  private sdkInstance: any;
  private comments: Comment[] = [];

  constructor() {
    this.sdkInstance = new CommentSDK(commentApplicationToken);
    this.sdkInstance.init();
  }

  async initializeState() {
    const response = await this.getAllComments();
    this.comments = response.records;
  }

  getAllComments(): any {
    return this.sdkInstance.getAllComments();
  }

  createComment(createCommentDTO: { ownerId: string; content: string }): any {
    return this.sdkInstance.createComment(createCommentDTO);
  }
}

export default CommentService;
