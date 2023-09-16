export interface Post{
    id: string;
    title: string;
    content: string;
    summary: string;
    urlhandle: string;
    featuredImageUrl: string ;
    visible: boolean;
    author: string;
    publishDate: Date;
    updatedDate: Date;
}