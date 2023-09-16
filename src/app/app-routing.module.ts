import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './Admin/admin-posts/admin-posts.component';
import { AdminViewPostComponent } from './Admin/admin-view-post/admin-view-post.component';

const routes: Routes = [
  {
    path: 'admin/posts',
    component: AdminPostsComponent,
  },
  {
    path: 'admin/posts/:id',
    component: AdminViewPostComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
