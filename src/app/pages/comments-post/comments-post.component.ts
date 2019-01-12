import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IComments } from '../../shared/models/comments';
import { IPosts } from 'src/app/shared/models/posts';

import * as fromStoreState from '../../shared/store/index';
import * as fromCommentsAction from '../../shared/store/actions/comments.action';
import  fromCommentsSelector from '../../shared/store/selectors/comments.selector';
import fromPostsSelector from '../../shared/store/selectors/posts.selector';

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent implements OnInit {

  postId: any;
  comments: IComments[];
  post: IPosts;

  constructor(private route: ActivatedRoute, private store: Store<fromStoreState.AppState>) {
    this.postId = this.route.snapshot.params['id'];
    this.store.select(fromCommentsSelector.getComments).subscribe(res => this.comments = res);
    this.store.select(fromPostsSelector.getPostById).subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.store.dispatch(new fromCommentsAction.LoadComments(this.postId));
  }

}
