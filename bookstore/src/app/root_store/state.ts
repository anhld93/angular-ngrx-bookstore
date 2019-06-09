import {UserStoreState} from './user-store';
import { BookStoreState} from './book-store'

export interface State {
  user: UserStoreState.UserState,
  book: BookStoreState.BookState
}
