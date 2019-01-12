import { FakeDataService } from './../../../services/fake-data.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError,switchMap } from 'rxjs/operators';

import * as fromComments from '../actions/comments.action';



@Injectable()
export class CommentsEffects{

  constructor(private action: Actions, private service: FakeDataService, ){}

  /**
   * Este efecto estará a la escucha de la accion LoadComments,
   * donde dicha acción recibe un idPost
   * el cual filtrará todos los comentarios de acuerdo la idPost
   */

  @Effect() comments$ = this.action.pipe(
    ofType(fromComments.CommentsTypeAction.LOAD_COMMENTS),
    map((action: fromComments.CommentsAction) => action.payload),
    switchMap(id => this.service.getComments(id).pipe(
      map(data => new fromComments.LoadCommentsSuccess(data)),
      catchError(error => of(new fromComments.LoadCommentsError(error)))
    ))
  );
}
