import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/Services/post.service';
import { Post } from 'src/app/models/post.model';
import { UpdatePostRequest } from 'src/app/models/update-post.model';

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
        })};
    });
  }

  updateForm(id: string){
    const updatepostrequest: UpdatePostRequest = {
      title: this.post.title,
      content: this.post.content,
      summary: this.post.summary,
      urlHandle: this.post.urlHandle,
      featuredImageUrl: this.post.featuredImageUrl,
      visible: this.post.visible,
      author: this.post.author,
      publishDate: this.post.publishDate,
      updatedDate: this.post.updatedDate,
    }

    this.postservice.updatePost(id, updatepostrequest)
    .subscribe( response => {
      alert("Updated");
    })
  }

  deletePost(id: string){
    this.postservice.deletePost(id)
    .subscribe(response => {
      alert("Deleted Post")
    })
  }
}
