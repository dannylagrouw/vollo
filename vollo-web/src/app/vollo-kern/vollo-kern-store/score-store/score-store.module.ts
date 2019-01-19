import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { scoreReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { ScoreStoreEffects } from './effects';
import { ScoreStoreService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('score', scoreReducer),
    EffectsModule.forFeature([ScoreStoreEffects])
  ],
  providers: [ScoreStoreService]
})
export class ScoreStoreModule {}
