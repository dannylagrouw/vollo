import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { mijnGroepenReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { MijnGroepenStoreEffects } from './effects';
import { MijnGroepenStoreService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('mijnGroepen', mijnGroepenReducer),
    EffectsModule.forFeature([MijnGroepenStoreEffects])
  ],
  providers: [MijnGroepenStoreService]
})
export class MijnGroepenStoreModule {}
