export interface Message {
    _id: string | number;
    text: string;
    createdAt: Date;
    system?: boolean;
    user?: User;
    messageLabel?: string;
}

export interface User {
    _id: number | string;
    name: string;
    avatar: string;
}