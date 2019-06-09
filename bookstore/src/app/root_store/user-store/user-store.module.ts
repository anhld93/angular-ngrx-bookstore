import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './user.reducer'
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './user.effect';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserEffects]
})

export class UserStoreModule {}
