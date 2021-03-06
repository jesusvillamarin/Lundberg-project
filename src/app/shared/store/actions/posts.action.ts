import { IPosts } from '../../models/posts';
import { Action } from "@ngrx/store";

export enum PostsActionsType {
  LOAD_ID_POST = "[Post] Load ID Post",
  LOAD_POSTS = "[Posts]  Load Post",
  LOAD_POSTS_ERROR = "[Posts] Load Post Error",
  LOAD_POSTS_SUCCESS = "[Posts] Load Post Success",
}

export class LoadPosts implements Action {
  readonly type = PostsActionsType.LOAD_POSTS;
  constructor(public payload: any){};
}

export class LoadPostsError implements Action {
  readonly type = PostsActionsType.LOAD_POSTS_ERROR;
  constructor(public payload: boolean){}
}

export class LoadPostsSuccess implements Action {
  readonly type = PostsActionsType.LOAD_POSTS_SUCCESS;
  constructor(public payload: IPosts[]){}
}

export class LoadIdPost implements Action {
  readonly type = PostsActionsType.LOAD_ID_POST;
  constructor(public payload: any){}
}

export type PostsAction =  LoadIdPost | LoadPosts | LoadPostsError | LoadPostsSuccess;
