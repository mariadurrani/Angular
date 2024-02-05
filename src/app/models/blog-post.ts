export interface BlogPost {
    id: number;
    title: string;
    thumbnailUrl: string;
    body: string;
    creationDate: Date;
    likes: number;
    dislikes: number;
    comments: string[];
}
