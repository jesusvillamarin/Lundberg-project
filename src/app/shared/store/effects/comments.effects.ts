import { FakeDataService } from './../../../services/fake-data.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError,switchMap } from 'rxjs/operators';

import * as fromComments from '../actions/comments.action';
import * as fromPosts from '../actions/posts.action';
import { Action } from '@ngrx/store';



@Injectable()
export class CommentsEffects{

  constructor(private action: Actions, private service: FakeDataService, ){}

  /**
   * Este efecto estará a la escucha de la accion LoadComments,
   * donde dicha acción recibe un idPost
   * el cual filtrará todos los comentarios de acuerdo la idPost
   */

  @Effect() comments$: Observable<Action> = this.action.pipe(
    ofType(fromPosts.PostsActionsType.LOAD_ID_POST),
    map((action: fromPosts.PostsAction) => action.payload),
    switchMap(id => this.service.getComments(id).pipe(
      map(data => new fromComments.LoadCommentsSuccess(data)),
      catchError(error => of(new fromComments.LoadCommentsError(error)))
    ))
  );
}
