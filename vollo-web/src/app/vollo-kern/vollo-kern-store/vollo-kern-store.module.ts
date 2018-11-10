import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatieStoreModule } from './authenticatie-store';
import { UiStoreModule } from './ui-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MijnGroepenStoreModule } from './mijn-groepen-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticatieStoreModule,
    MijnGroepenStoreModule,
    UiStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class VolloKernStoreModule {}
