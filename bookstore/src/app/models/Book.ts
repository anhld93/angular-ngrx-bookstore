import {Genre} from "./Genre";

export class Book {
  id: number;
  title: string;
  // publicYear: string;
  price: string;
  genre: Genre;

  constructor(bookResponse: any) {
    this.id = bookResponse.id;
    this.title = bookResponse.title;
    // this.publicYear = bookResponse.publicYear;
    this.price = bookResponse.price;
    this.genre = bookResponse.genre;
  }

}
