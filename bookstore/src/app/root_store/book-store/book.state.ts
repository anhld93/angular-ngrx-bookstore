export interface BookState{
  data: object;
  loaded: boolean;
  loading: boolean;
}

export const initialState: BookState = {
  data: {},
  loaded: false,
  loading: false
};
