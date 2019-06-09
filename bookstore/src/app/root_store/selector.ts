import {createSelector, MemoizedProjection, MemoizedSelector} from "@ngrx/store";
import { UserStoreSelectors } from './user-store';



export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  UserStoreSelectors.getUserStateLoading,
  (user: boolean) => {
    return user;
  }
);
