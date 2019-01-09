import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, mergeMap, tap, catchError, switchMap} from 'rxjs/operators';

import { ofType, Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { FakeDataService } from './../../../services/fake-data.service';
import { HttpClient } from '@angular/common/http';

import * as fromUsers from '../actions/users.action';


@Injectable()
export class UsersEffects {

  constructor(private http: HttpClient, private actions: Actions, private serviceUsers: FakeDataService ){}

  @Effect() load$ = this.actions.pipe(
    ofType(fromUsers.UsersActionTypes.LOAD_USERS),
    switchMap(()=>{
      return this.serviceUsers.getData().pipe(
        map(users => new fromUsers.LoadUsersSuccess(users)),
        catchError(error => of(new fromUsers.LoadUsersError(error)))
      )
    })

  );
}
