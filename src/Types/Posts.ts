export interface Posts {
    id: string;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: PostComments[];
}


export interface PostComments {
    id: string;
    text: string;
    userName: string;
}