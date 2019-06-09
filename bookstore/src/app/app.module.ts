import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import {AppRoutingModule, RoutingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {UserloginComponent} from './component/userlogin/userlogin.component';
import {MainpageComponent} from './component/mainpage/mainpage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {MDBBootstrapModule } from 'angular-bootstrap-md'
import {ScrollingModule} from '@angular/cdk/scrolling';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpErrorInterceptor} from './http-error.interceptor';
import * as Rollbar from 'rollbar';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { BookComponent } from './component/book/book.component';
import {JwtHelperService} from '@auth0/angular-jwt';
import {RootStoreModule} from './root_store';

const rollbarConfig = {
  captureUncaught: true,
  captureUnhandledRejections: true
};

export function rollbarFactory() {
  return new Rollbar(rollbarConfig)
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserloginComponent,
    MainpageComponent,
    RoutingComponents,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RootStoreModule,
    ScrollingModule
  ],
  providers: [
    {
      provide: RollbarService,
      useFactory: rollbarFactory
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    JwtHelperService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
