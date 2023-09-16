import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apibaseurl = environment.apiBaseUrl;
  
  getAllPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.apibaseurl + '/api/posts');
  }

  getPostById(id: string){
    return this.http.get<Post>(this.apibaseurl + '/api/posts/' + id);
  }
}
