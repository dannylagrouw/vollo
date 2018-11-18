import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authenticatieReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticatieStoreEffects } from './effects';
import { AuthenticatieStoreService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('authenticatie', authenticatieReducer),
    EffectsModule.forFeature([AuthenticatieStoreEffects])
  ],
  providers: [AuthenticatieStoreService]
})
export class AuthenticatieStoreModule {}
