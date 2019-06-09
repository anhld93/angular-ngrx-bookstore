import * as userReducer from './user.reducer';
import * as userState from './user.state'

import {ActionReducerMap, createFeatureSelector, createSelector, MemoizedSelector} from "@ngrx/store";


export interface State {
  userState: userState.UserState;
}

export const selectUserState = createFeatureSelector('user');

export const getUserStateData = createSelector(selectUserState, userReducer.getUserData);
export const getUserStateLoading: MemoizedSelector<object, boolean> = createSelector(selectUserState, userReducer.getUserLoading);
export const getUserStateLoaded = createSelector(selectUserState, userReducer.getUserLoaded);
