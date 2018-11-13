import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { groepReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { GroepStoreEffects } from './effects';
import { GroepStoreService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('groep', groepReducer),
    EffectsModule.forFeature([GroepStoreEffects])
  ],
  providers: [GroepStoreService]
})
export class GroepStoreModule {}
