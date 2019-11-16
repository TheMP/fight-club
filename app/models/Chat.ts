export interface Message {
    _id: number;
    text: string;
    createdAt: Date;
    user: User;
}

export interface User {
    _id: number;
    name: string;
    avatar: string;
}