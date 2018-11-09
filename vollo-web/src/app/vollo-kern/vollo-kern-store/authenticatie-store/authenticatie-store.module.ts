import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authenticatieReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticatieStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('authenticatie', authenticatieReducer),
    EffectsModule.forFeature([AuthenticatieStoreEffects])
  ]
})
export class AuthenticatieStoreModule {}
