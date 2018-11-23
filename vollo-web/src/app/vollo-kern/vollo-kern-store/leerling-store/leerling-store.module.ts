import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { leerlingReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeerlingStoreEffects } from './effects';
import { LeerlingStoreService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('leerling', leerlingReducer),
    EffectsModule.forFeature([LeerlingStoreEffects])
  ],
  providers: [LeerlingStoreService]
})
export class LeerlingStoreModule {}
