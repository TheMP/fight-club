export interface Message {
    _id: string | number;
    text: string;
    createdAt: Date;
    system?: boolean;
    user?: User;
}

export interface User {
    _id: number | string;
    name: string;
    avatar: string;
}