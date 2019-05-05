import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserloginComponent} from './component/userlogin/userlogin.component';
import {MainpageComponent} from './component/mainpage/mainpage.component';
import {BookComponent} from './component/book/book.component';

import { AuthGuardService as AuthGuard} from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: UserloginComponent
  },
  {
    path: '',
    component: MainpageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'book',
    component: BookComponent,
    canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const RoutingComponents = [UserloginComponent, MainpageComponent, BookComponent];
