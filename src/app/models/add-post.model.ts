export interface AddPostRequest{
    title: string;
    content: string;
    summary: string;
    urlHandle: string;
    featuredImageUrl: string ;
    visible: boolean;
    author: string;
    publishDate: Date;
    updatedDate: Date;
}