import { Component } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { AddPostRequest } from 'src/app/models/add-post.model';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent {
  
  constructor(private postservice: PostService){}

  post : AddPostRequest = {
    title: '',
    content: '',
    summary: '',
    urlHandle: '',
    featuredImageUrl: '' ,
    visible: false,
    author: '',
    publishDate: new Date(),
    updatedDate: new Date(),
  };

  AddPost(){
    this.postservice.addPost(this.post)
    .subscribe(response => {
      alert("Success!");
    })
  }
}
