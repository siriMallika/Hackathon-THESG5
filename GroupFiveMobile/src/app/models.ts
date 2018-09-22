import { HttpHeaders } from "@angular/common/http";

export class Board {
    id: string;
    username: string;
    title: string;
    detail: string;
    posts: Post[];
}

export class Post {
    id: string;
    username: string;
    title: string;
    detail: string;
}

export class GlobalVarible {
    static host: string = "https://thes-hackathong5.azurewebsites.net";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}