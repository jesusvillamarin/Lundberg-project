import { IUser } from './../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user: IUser;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  log(){
    this.router.navigate(['info:1'])
  }

}
