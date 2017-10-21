import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Article } from "../model/article";
const POST_URL:string="http://localhost:3000/posts";
@Injectable()
export class ArticleService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
      return this.http.get(POST_URL);
  }
  getPost(id:number):Observable<any>{
    return this.http.get(`${POST_URL}/${id}`);
  }
  update(article:Article):Observable<any>{
    return this.http.put(`${POST_URL}/${article.id}`,article);
  }
  create(article:Article):Observable<any>{
    return this.http.post(`${POST_URL}`,article);
  }
}
