import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../models/Book";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class BookService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:8080/book/getAll`)
      .pipe(
        map(
          (data: Book[]) => data
        )
      );

  }
}
