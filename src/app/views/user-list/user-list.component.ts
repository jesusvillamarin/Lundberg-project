import { Component, OnInit } from '@angular/core';
import { IUser } from "../../models/user";
import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[];

  constructor(private serviceData: FakeDataService) { }

  ngOnInit() {
    this.serviceData.getData().subscribe(res => {
      this.users = res;
    })
  }

}
