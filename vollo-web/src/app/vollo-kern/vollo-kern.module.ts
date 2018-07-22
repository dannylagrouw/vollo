import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MijnGroepenComponent } from './mijn-groepen/mijn-groepen.component';
import { InloggenComponent } from './inloggen/inloggen.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolloMaterialModule } from '../vollo-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MijnGroepenService } from './mijn-groepen/mijn-groepen.service';
import { AgGridModule } from 'ag-grid-angular';
import { PaginaTitelComponent } from './pagina-titel/pagina-titel.component';
import { GroepComponent } from './groep/groep.component';
import { GroepService } from './groep/groep.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    VolloMaterialModule,
    AgGridModule.withComponents([])
  ],
  declarations: [MijnGroepenComponent, InloggenComponent, PaginaTitelComponent, GroepComponent],
  exports: [MijnGroepenComponent, InloggenComponent, PaginaTitelComponent, GroepComponent],
  providers: [MijnGroepenService, GroepService]
})
export class VolloKernModule {}
