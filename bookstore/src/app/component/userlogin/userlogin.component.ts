import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {Store} from "@ngrx/store";

import * as UserStore from '../../root_store/user-store/index';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import * as BookStore from "../../root_store/book-store";

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  username: string;
  password: string;
  userData: User;
  showSpinner: boolean;

  constructor(private store: Store<UserStore.UserStoreState.UserState>,
              private router: Router) { }

  userLogin() {
    this.store.dispatch(new UserStore.UserStoreActions.FetchUser({
      userName: this.username,
      password: this.password
    }))
  }

  ngOnInit() {
    // this.userloginForm = this.formBuilder.group({
    //   username: new FormControl('', Validators.required),
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ]))
    // });


    this.store.select(UserStore.UserStoreSelectors.getUserStateData).subscribe((state) => {
      if (Object.keys(state).length !== 0) {
        this.userData = new User(state);
        if(this.userData.userName) {
          sessionStorage.setItem('token', this.userData.token);
          // localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NTY2MzM4MjcsImV4cCI6MTU4ODE2OTgyNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.c9TUCtxzC7tSOtHZ-v7RhRaHL9d5F6FpZPSFu0bRjYE');
          // TODO test spinner
          // setTimeout(() => {
          //   this.showSpinner = false;
          //   this.router.navigate(['book'])
          // }, 500)

          this.router.navigate(['book']);
        } else {
          console.log("Nothing happen");
          // alert("Invalid Login");
          return false;
        }
      }
    })
  }

}
