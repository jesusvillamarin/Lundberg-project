import { CommentsPostComponent } from './comments-post.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component:CommentsPostComponent}
]

@NgModule({
  declarations: [CommentsPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommentsPostModule { }
