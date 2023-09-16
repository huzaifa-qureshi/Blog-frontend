import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  constructor(private postservice: PostService){

  }

  posts : Post[] = []; 
  
  ngOnInit(): void {
    this.postservice.getAllPosts()
    .subscribe( response => {
        this.posts = response;
    })
  }
}
