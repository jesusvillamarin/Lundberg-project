import { IPosts } from '../../shared/models/posts';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IUser } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as fromUsersStore from '../../shared/store/index';
import * as fromUsersActions from '../../shared/store/actions/users.action';
import fromUsersSelectors from '../../shared/store/selectors/users.selector';
import fromPostsSelector from '../../shared/store/selectors/posts.selector';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user$: Observable<IUser>;
  posts$: Observable<IPosts[]>
  id:any;

  constructor(private route: ActivatedRoute, private store: Store<fromUsersStore.AppState> ) {
    this.id =  this.route.snapshot.params['id'];
    this.user$ = this.store.select(fromUsersSelectors.getUserById);
    this.posts$ = this.store.select(fromPostsSelector.getPosts);
   }

  ngOnInit() {
    this.store.dispatch(new fromUsersActions.LoadIdUser(this.id));
  }

}
