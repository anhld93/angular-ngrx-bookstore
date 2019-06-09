import * as bookReducer from './book.reducer';
import {BookState}  from './book.state'

import {createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";

export const selectBookState: MemoizedSelector<object, BookState> = createFeatureSelector<BookState>('book');

export const getBookStateData = createSelector(selectBookState, bookReducer.getBookData);
export const getBookStateLoading: MemoizedSelector<object, boolean> = createSelector(selectBookState, bookReducer.getBookLoading);
export const getBookStateLoaded = createSelector(selectBookState, bookReducer.getBookLoaded);
