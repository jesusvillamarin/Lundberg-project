import { UserInfoComponent } from './user-info/user-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: 'info/:id', loadChildren: './user-info/user-info.module#UserInfoModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
