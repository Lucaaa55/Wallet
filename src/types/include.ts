export type Starred = {
    icon: string;
    name: string;
    from: number;
    to: number;
}

export type UserType = {
    email: string;
    password: string;
    name: string;
    image: string;
}

export type Message = {
    role: 'user' | 'assistant';
    content: string;
}

export type Chat = {
    id: number;
    title: string;
    messages: string;
    time: string;
}