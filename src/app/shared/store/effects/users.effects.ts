import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {map, catchError, switchMap} from 'rxjs/operators';

import { ofType, Effect, Actions } from '@ngrx/effects';
import { FakeDataService } from './../../../services/fake-data.service';

import * as fromUsers from '../actions/users.action';


@Injectable()
export class UsersEffects {

  constructor(private actions: Actions, private dataService: FakeDataService ){}

  /**
   * Este efecto escuchara la acción LoadUser para obtener todos los usuarios del API
   */

  @Effect() load$ = this.actions.pipe(
    ofType(fromUsers.UsersActionTypes.LOAD_USERS),
    switchMap(()=>{
      return this.dataService.getUsers().pipe(
        map(users => new fromUsers.LoadUsersSuccess(users)),
        catchError(error => of(new fromUsers.LoadUsersError(error)))
      )
    })

  );
}
