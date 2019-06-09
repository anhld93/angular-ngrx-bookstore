import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './book.reducer'
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from './book.effects';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('book', reducer),
    EffectsModule.forFeature([BookEffects])
  ],
  providers: [BookEffects]
})

export class BookStoreModule {}
