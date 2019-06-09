import * as bookActions from './book.action'
import {initialState, BookState} from "./book.state";

export function reducer(state = initialState, action: bookActions.BookActions) {
  switch (action.type) {
    case bookActions.FETCH_BOOK: {
      return{
        ...state, loading: true
      };
    }
    case bookActions.FETCH_BOOK_FAIL: {
      const data = action.payload;
      return {
        ...state, loading: false, loaded: true, data
      };
    }
    case bookActions.FETCH_BOOK_SUCCESS: {
      const data = action.payload;
      return {
        ...state, loading: false, loaded: false, data
      }
    }
  }

  return state;
}

export const getBookLoading = (state: BookState): boolean => {
  return state.loading;
};

export const getBookLoaded = (state: BookState) => {
  return state.loaded;
};

export const getBookData = (state: BookState) => {
  return state.data;
};
