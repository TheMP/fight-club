export interface Message {
    _id: string | number;
    // actual reply from bot
    text: string;
    // comment from our App
    comment: string;
    // label indicating this message is SUCCESS, WARNING, ERROR
    messageLabel: string;
    // label indicating this whole conversation is SUCCEED, IN_PROGRESS or FAILED
    conversationLabel: string;
    createdAt: Date;
    user?: User;
}

export interface User {
    _id: number | string;
    name: string;
    avatar: string;
}