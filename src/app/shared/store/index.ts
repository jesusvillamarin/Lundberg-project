import { environment } from './../../../environments/environment';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze'
import * as fromUsers from './reducers/users.reducer';

export interface AppState {
  users: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUsers.UsersReducer
}

export const metaReducers : MetaReducer<AppState>[] = !environment.production ? [ logger, storeFreeze] : [];

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState>{
  return function(state: AppState, action:any) : AppState  {
    console.log('state', state);
    console.log('action', action);
    return reducer(state,action);
  }
}
