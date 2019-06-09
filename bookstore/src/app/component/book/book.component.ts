import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from "@angular/material";
import {Book} from "../../models/Book";
import {Store} from "@ngrx/store";
import * as BookStore from "../../root_store/book-store";
import {Observable} from "rxjs";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

// const BOOK: Book[];

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  books$: Observable<Book[]>;

  constructor(private store$: Store<BookStore.BookStoreState.BookState>) { }

  bookList: Book[];
  dataSource: any | null;
  displayedColumns: string[] = ['id','title', 'price', 'genre'];


  ngOnInit() {
    this.store$.dispatch(new BookStore.BookStoreActions.FetchBook());

    this.store$.select(BookStore.BookStoreSelectors.getBookStateData).subscribe((state) => {
      if(Object.keys(state).length !== 0) {
        this.bookList = Object.values(state);
        this.dataSource = new MatTableDataSource(this.bookList);
        this.dataSource.filterPredicate = (data: Book, filter: string) => {
          return data.title.trim().toLowerCase().includes(filter.toLowerCase());
        };

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }


  logData(row) {
    console.log(row);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  onRefresh() {
    this.store$.dispatch(new BookStore.BookStoreActions.FetchBook());
  }
}
