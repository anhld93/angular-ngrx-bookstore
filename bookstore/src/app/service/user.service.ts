import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  data: User = {
    id: 1,
    userName: 'LeAnh',
    role: 'ADMIN',
    token: '123456'
  }

  userLogin(payload: any): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/auth/login`, {
      "userName": payload.userName,
      "password": payload.password
    })
  }
}
