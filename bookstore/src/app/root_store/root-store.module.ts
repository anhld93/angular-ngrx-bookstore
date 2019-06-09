import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStoreModule} from './user-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BookStoreModule} from "./book-store";


@NgModule({
  imports: [
    CommonModule,
    UserStoreModule,
    BookStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: []
})

export class RootStoreModule {}

