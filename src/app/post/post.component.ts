import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(private route: ActivatedRoute, private postservice: PostService){}

  post !: Post;
  
  ngOnInit(): void {
    this.route.paramMap.
    subscribe( params => {
      const id = params.get('id');

      if (id){
        this.postservice.getPostById(id)
        .subscribe( response => {
          this.post = response;
        })};
    });
  }
}
