// Direct representation of the Reply abject from the Comment API
class Reply {
  constructor(
    public commentId: string,
    public replyId: string,
    public ownerId: string,
    public content: string,
    public numOfVotes: number,
    public numOfUpVotes: number,
    public numOfDownVotes: number,
    public numOfFlags: number,
    public createdAt: number,
    public updatedAt: number
  ) {}
}

export default Reply;
