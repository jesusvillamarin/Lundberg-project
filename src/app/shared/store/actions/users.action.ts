import { Action } from '@ngrx/store';

import { IUser } from '../../models/user';

export enum UsersActionTypes {
   LOAD_ID_USER = "[User] Load specific user",
   LOAD_USERS = '[Users] Load Users',
   LOAD_USERS_ERROR = '[Users] Load Users Fail',
   LOAD_USERS_SUCCESS = '[Users] Load Users Success'
 }

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LOAD_USERS;
  constructor(public payload?: any){}
}

export class LoadUsersError implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_ERROR;
  constructor(public payload:  any){}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: IUser[]){}
}

export class LoadIdUser implements Action {
  readonly type = UsersActionTypes.LOAD_ID_USER;
  constructor(public payload: string){}
}


export type UsersActions = LoadUsers | LoadUsersError | LoadUsersSuccess | LoadIdUser;
