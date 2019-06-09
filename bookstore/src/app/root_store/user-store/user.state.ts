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
