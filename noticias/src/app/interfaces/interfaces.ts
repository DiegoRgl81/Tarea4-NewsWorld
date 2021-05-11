export interface RespuestaTopHeadlines{
    status: string;
    totalResults: number;
    articles: Article[];

}
export interface Article{
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    UrlToImage: string;
    publishetAt: string;
    content?: string; 
}

export interface Source{
    id?: string;
    name:string;
}