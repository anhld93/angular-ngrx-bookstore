import {Injectable} from "@angular/core";

import {Effect, Actions, ofType} from '@ngrx/effects';
import {Observable, of} from "rxjs";
import {Action} from '@ngrx/store';

import * as UserActions from '../actions/user.action'
import {catchError, map, switchMap} from "rxjs/operators";
import {UserService} from "../../service/user.service";

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private userService: UserService) {
  }

  @Effect()
  loadUser$: Observable<Action> = this.action$.pipe(
    ofType(UserActions.FETCH_USER),
    switchMap((action: any) => {
        return this.userService.userLogin(action.payload).pipe(
          map(data => ({
            type: UserActions.FETCH_USER_SUCCESS, payload: data
          })),
          catchError((err) => {
            return of(new UserActions.FetchUserFail((err['message'])))
          }))
      }
    )
  );
}
