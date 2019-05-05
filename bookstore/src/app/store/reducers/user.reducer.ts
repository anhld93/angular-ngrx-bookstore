import * as userActions from '../actions/user.action'

export interface UserState {
  data: object;
  loaded: boolean;
  loading: boolean;
}

export const initialState: UserState = {
  data: {},
  loaded: false,
  loading: false
};

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
