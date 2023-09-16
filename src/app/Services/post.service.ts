import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { UpdatePostRequest } from '../models/update-post.model';
import { AddPostRequest } from '../models/add-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  apibaseurl = environment.apiBaseUrl;
  
  getAllPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.apibaseurl + '/api/posts');
  }

  getPostById(id: string) : Observable<Post>{
    return this.http.get<Post>(this.apibaseurl + '/api/posts/' + id);
  }

  updatePost(id: string, updatepostrequest: UpdatePostRequest ): Observable<Post>{
    return this.http.put<Post>(this.apibaseurl + '/api/posts/' + id , updatepostrequest);
  }

  addPost(addpostrequest: AddPostRequest): Observable<Post>{
    return this.http.post<Post>(this.apibaseurl + '/api/posts/' , addpostrequest);
  }

  deletePost(id: string) : Observable<Post>{
    return this.http.delete<Post>(this.apibaseurl + '/api/posts/' + id);
  }
}
