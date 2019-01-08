import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { UserCardComponent } from './user-card.component';
import { Routes, RouterModule } from '@angular/router';

const routes:  Routes = [
  { path: '', component: UserCardComponent, pathMatch: 'full' },
  // { path: 'info', loadChildren: '../user-info/user-info.module#UserInfoModule'}
]

@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class UserCardModule { }
