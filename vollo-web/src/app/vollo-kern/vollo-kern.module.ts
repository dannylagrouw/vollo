import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MijnGroepenComponent } from './mijn-groepen/mijn-groepen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MijnGroepenComponent],
  exports: [MijnGroepenComponent]
})
export class VolloKernModule { }
