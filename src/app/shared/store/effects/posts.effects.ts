import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, catchError , switchMap } from 'rxjs/operators';

import { ofType, Actions, Effect } from '@ngrx/effects';


import * as fromUser from '../actions/users.action';
import * as fromPosts from '../actions/posts.action';
import { FakeDataService } from './../../../services/fake-data.service';


@Injectable()
export class PostEffects {
  constructor(private action: Actions, private dataService: FakeDataService) {}

  /*
    Cuando se dispara la acción LoadIdUser, se guarde el idUser en el store
    esto con fin de usar el selector getUserById que retornara al usuario con el id que se guardo

    A su vez este efecto estará a la escucha de la misma acción para usar el idUser,
    donde el servicio filtrara todos los post de acuerdo al idUser
  */

  @Effect() posts$ = this.action.pipe(
    ofType(fromUser.UsersActionTypes.LOAD_ID_USER),
    map((action: fromUser.UsersActions) => action.payload),
    switchMap(id =>
      this.dataService.getPosts(id).pipe(
        map(data => new fromPosts.LoadPostsSuccess(data)),
        catchError(error => of(new fromPosts.LoadPostsError(error)))
      )
    )
  );
}
