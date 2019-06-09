import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import * as BookActions from './book.action'
import {catchError, map, switchMap} from 'rxjs/operators';
import {BookService} from '../../service/book.service';

@Injectable()
export class BookEffects {
  constructor(private action$: Actions, private bookservice: BookService) {
  }

  @Effect()
  loadAllBook$: Observable<Action> = this.action$.pipe(
    ofType(BookActions.FETCH_BOOK),
    switchMap((action: any) => {
        return this.bookservice.getAllBooks().pipe(
          map(data => ({
            type: BookActions.FETCH_BOOK_SUCCESS, payload: data
          }))
        )
      }
    )
  )
}

