import { Action } from '@ngrx/store';
import { IComments } from '../../models/comments';

export enum CommentsTypeAction {
  LOAD_COMMENTS = "[Comments] Load Comments",
  LOAD_COMMENTS_ERROR = "[Comments] Load Comments Error",
  LOAD_COMMENTS_SUCCESS ="[Comments] Load Comments Success"
}

export class LoadComments implements Action{
  readonly type = CommentsTypeAction.LOAD_COMMENTS;
  constructor(public payload: any){};
}

export class LoadCommentsError implements Action {
  readonly type = CommentsTypeAction.LOAD_COMMENTS_ERROR;
  constructor(public payload: boolean){}
}

export class LoadCommentsSuccess implements Action {
  readonly type = CommentsTypeAction.LOAD_COMMENTS_SUCCESS;
  constructor(public payload: IComments[]){};
}

export type CommentsAction = LoadComments | LoadCommentsError | LoadCommentsSuccess;
