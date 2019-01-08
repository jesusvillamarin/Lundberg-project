import { IUser } from './../../models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user: IUser;

  constructor() { }

  ngOnInit() {
  }

  log(){
    console.log('hi');
  }

}
