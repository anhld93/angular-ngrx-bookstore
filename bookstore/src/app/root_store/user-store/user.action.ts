import { Action } from "@ngrx/store";

export const FETCH_USER = 'fetch_user';
export const FETCH_USER_FAIL = 'fetch_user_fail';
export const FETCH_USER_SUCCESS = 'fetch_user_success';

export class FetchUser implements Action {
  readonly type = FETCH_USER;
  constructor(public payload: any) {}
}

export class FetchUserFail implements Action {
  readonly type = FETCH_USER_FAIL;
  constructor(public payload: any) {}
}

export class FetchUserSuccess implements Action {
  readonly type = FETCH_USER_SUCCESS;
  constructor(public payload: any) {}
}

export type UserActions = FetchUser | FetchUserFail | FetchUserSuccess;
