import { environment } from './../../../environments/environment';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze'
import * as fromUsers from './reducers/users.reducer';
import * as fromPosts from './reducers/posts.reducer';

export interface AppState {
  users: fromUsers.UsersState;
  posts: fromPosts.PostsState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUsers.UsersReducer,
  posts: fromPosts.PostsReducer
}

export const metaReducers : MetaReducer<AppState>[] = !environment.production ? [ logger, storeFreeze] : [];

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState>{
  return function(state: AppState, action:any) : AppState  {
    console.log('state', state);
    console.log('action', action);
    return reducer(state,action);
  }
}
