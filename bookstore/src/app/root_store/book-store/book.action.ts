import { Action } from "@ngrx/store";
import {Book} from "../../models/Book";

export const FETCH_BOOK = 'fetch_book';
export const FETCH_BOOK_FAIL = 'fetch_book_fail';
export const FETCH_BOOK_SUCCESS = 'fetch_book_success';

export class FetchBook implements Action {
  readonly type = FETCH_BOOK;
}

export class FetchBookFail implements Action {
  readonly type = FETCH_BOOK_FAIL;
  constructor(public payload: any) {}
}

export class FetchBookSuccess implements Action {
  readonly type = FETCH_BOOK_SUCCESS;
  constructor(public payload: {items : Book[] }) {}
}

export type BookActions = FetchBook | FetchBookFail | FetchBookSuccess;
