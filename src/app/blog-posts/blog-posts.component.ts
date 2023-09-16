import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  constructor(private postservice: PostService){}

  posts !: Post[];
  post !: Post;

  ngOnInit(): void {
    this.postservice.getAllPosts()
    .subscribe(response => {
      this.posts = response;
      this.post = this.posts[0];
    })
  }
}
