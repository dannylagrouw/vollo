import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { uiReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { UiStoreEffects } from './effects';
import { UiStoreService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ui', uiReducer),
    EffectsModule.forFeature([UiStoreEffects])
  ],
  providers: [UiStoreService]
})
export class UiStoreModule {}
