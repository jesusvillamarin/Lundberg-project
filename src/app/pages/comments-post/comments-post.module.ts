import { CommentsPostComponent } from './comments-post.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component:CommentsPostComponent}
]

const COMMON_MODULE = [
  FlexLayoutModule,
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  CommonModule,
  RouterModule.forChild(routes)
]

@NgModule({
  declarations: [CommentsPostComponent],
  imports: COMMON_MODULE

})
export class CommentsPostModule { }
