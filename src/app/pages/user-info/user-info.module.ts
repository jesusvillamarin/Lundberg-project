import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';

const routes: Routes = [
  { path: ':id', component: UserInfoComponent, pathMatch: 'full'}
]

@NgModule({
  declarations: [ UserInfoComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserInfoModule { }
