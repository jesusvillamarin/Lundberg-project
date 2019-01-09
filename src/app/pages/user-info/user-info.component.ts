import { Store } from '@ngrx/store';
import { IUser } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as fromUsersStore from '../../shared/store/index';
import * as fromUsersActions from '../../shared/store/actions/users.action';
import * as fromUsersSelectors from '../../shared/store/selectors/users.selector';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: IUser;
  id:any;
  constructor(private route: ActivatedRoute, private store: Store<fromUsersStore.AppState> ) {
    this.id =  this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.store.dispatch(new fromUsersActions.LoadSpecificUser(this.id));
    this.store.select(fromUsersSelectors.default.getUser).subscribe(res => this.user = res);
  }

}
