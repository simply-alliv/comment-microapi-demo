// Direct representation of the Comment abject from the Comment API
class Comment {
  constructor(
    public applicationId: string,
    public commentId: string,
    public ownerId: string,
    public content: string,
    public numOfVotes: number,
    public numOfUpVotes: number,
    public numOfDownVotes: number,
    public numOfFlags: number,
    public numOfReplies: number,
    public createdAt: string,
    public updatedAt: string
  ) {}
}

export default Comment;
