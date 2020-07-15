// Direct representation of the Comment abject from the Comment API
class Comment {
  constructor(
    public commentId: string,
    public refId: string,
    public ownerId: string,
    public content: string,
    public origin: string,
    public numOfVotes: number,
    public numOfUpVotes: number,
    public numOfDownVotes: number,
    public numOfFlags: number,
    public numOfReplies: number
  ) {}
}

export default Comment;
