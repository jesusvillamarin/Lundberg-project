import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserListComponent } from './user-list/user-list.component';
// import { UserCardModule } from './user-card/user-card.module';

import { MatCardModule } from "@angular/material/card";
import { UserCardComponent } from './user-card/user-card.component';

const routes: Routes = [
  { path: '', component: UserListComponent, pathMatch: 'full' },
  { path: 'info', loadChildren: './user-info/user-info.module#UserInfoModule'}

];

@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class UserModule { }
