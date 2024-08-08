// You can define interfaces for all React components here.
// Do not forget to export properly.

interface CommentProps {
    userImagePath: any;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[];
}

interface ReplyProps {
    userImagePath: any;
    username: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps,CommentProps } 
