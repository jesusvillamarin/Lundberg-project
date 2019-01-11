import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { UserInfoComponent } from "./user-info.component";

const routes: Routes = [
  { path: ":id", component: UserInfoComponent, pathMatch: "full" },
  {
    path: ":id/posts/:id",
    loadChildren: "../comments-post/comments-post.module#CommentsPostModule"
  }
];

const COMMMON_MODULES = [
  CommonModule,
  RouterModule.forChild(routes),
  FlexLayoutModule,
  MatIconModule,
  MatTableModule
];

@NgModule({
  declarations: [UserInfoComponent],
  imports: COMMMON_MODULES
})
export class UserInfoModule {}
