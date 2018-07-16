import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MijnGroepenComponent } from './mijn-groepen/mijn-groepen.component';
import { InloggenComponent } from './inloggen/inloggen.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolloMaterialModule } from '../vollo-material.module';
import { FlexLayoutModule } from '../../../node_modules/@angular/flex-layout';
import { RouterModule } from '../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    VolloMaterialModule
  ],
  declarations: [MijnGroepenComponent, InloggenComponent],
  exports: [MijnGroepenComponent, InloggenComponent]
})
export class VolloKernModule {}
