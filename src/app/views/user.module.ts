import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
// import { UserCardModule } from './user-card/user-card.module';

import { MatCardModule } from "@angular/material/card";
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule
  ]
})
export class UserModule { }
