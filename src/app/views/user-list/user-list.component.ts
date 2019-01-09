import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IUser } from "../../models/user";
import { Store } from '@ngrx/store';

import * as fromUsersStore from '../../shared/store/index';
import * as fromUsersActions from '../../shared/store/actions/users.action'
import * as fromUsersSelectors from '../../shared/store/selectors/users.selector';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(private store: Store<fromUsersStore.AppState>) { }

  ngOnInit() {
    this.users$ = this.store.select(fromUsersSelectors.default.getUsers);
    this.store.dispatch(new fromUsersActions.LoadUsers());
  }

}
