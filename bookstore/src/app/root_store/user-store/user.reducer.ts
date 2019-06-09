import * as userActions from './user.action'
import {initialState, UserState} from "./user.state";
import {ActionReducerMap} from "@ngrx/store";
import {State} from "./user.selector";


// export const reducers: ActionReducerMap<State> = {
//   userState: this.reducer
// };

export function reducer(state = initialState, action: userActions.UserActions) {
  switch (action.type) {
    case userActions.FETCH_USER: {
      return{
        ...state, loading: true
      };
    }
    case userActions.FETCH_USER_FAIL: {
      const data = action.payload;
      return {
        ...state, loading: false, loaded: true, data
      };
    }
    case userActions.FETCH_USER_SUCCESS: {
      const data = action.payload;
      return {
        ...state, loading: false, loaded: false, data
      }
    }
  }

  return state;
}

export const getUserLoading = (state: UserState) => {
  return state.loading;
};

export const getUserLoaded = (state: UserState) => {
  return state.loaded;
};

export const getUserData = (state: UserState) => {
  return state.data;
};
