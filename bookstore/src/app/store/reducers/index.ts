import { ActionReducerMap, createSelector, createFeatureSelector} from '@ngrx/store';

import * as userReducer from './user.reducer';

export interface State {
  user: userReducer.UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer.reducer
};

export const selectUserState = createFeatureSelector('user');

export const getUserStateData = createSelector(selectUserState, userReducer.getUserData);
export const getUserStateLoading = createSelector(selectUserState, userReducer.getUserLoading);
export const getUserStateLoaded = createSelector(selectUserState, userReducer.getUserLoaded);
