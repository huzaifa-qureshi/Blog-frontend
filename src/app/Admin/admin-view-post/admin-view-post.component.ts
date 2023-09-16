import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.scss']
})
export class AdminViewPostComponent implements OnInit {
  
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
        })
      }
      
    })
  }
}
