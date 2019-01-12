import { IPosts } from '../../shared/models/posts';
import { Store } from '@ngrx/store';
import { IUser } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as fromStoreState from '../../shared/store/index';
import * as fromUsersActions from '../../shared/store/actions/users.action';
import fromUsersSelectors from '../../shared/store/selectors/users.selector';
import fromPostsSelector from '../../shared/store/selectors/posts.selector';

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  user: IUser;
  dataSource: IPosts[];
  id: any;
  columns: string[] = ["id", "title", "post"];

  constructor(
    private route: ActivatedRoute,private store: Store<fromStoreState.AppState>) {

    this.id = this.route.snapshot.params["id"];
    this.store.select(fromUsersSelectors.getUserById).subscribe(res => (this.user = res));
    this.store.select(fromPostsSelector.getPosts).subscribe(res => (this.dataSource = res));
  }

  ngOnInit() {
    this.store.dispatch(new fromUsersActions.LoadIdUser(this.id));
  }
}
