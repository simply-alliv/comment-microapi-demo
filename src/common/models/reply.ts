// Direct representation of the Reply abject from the Comment API
class Reply {
  constructor(
    public replyId: string,
    public commentId: string,
    public ownerId: string,
    public content: string,
    public numOfVotes: number,
    public numOfUpVotes: number,
    public numOfDownVotes: number,
    public numOfFlags: number
  ) {}
}

export default Reply;
