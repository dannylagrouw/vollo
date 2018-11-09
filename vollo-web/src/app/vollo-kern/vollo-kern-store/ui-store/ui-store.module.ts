import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { uiReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { UiStoreEffects } from './effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ui', uiReducer),
    EffectsModule.forFeature([UiStoreEffects])
  ]
})
export class UiStoreModule {}
