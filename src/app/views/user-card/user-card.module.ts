import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { UserCardComponent } from './user-card.component';

@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class UserCardModule { }
