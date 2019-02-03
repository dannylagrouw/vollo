import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MijnGroepenComponent } from './mijn-groepen/mijn-groepen.component';
import { InloggenComponent } from './inloggen/inloggen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolloMaterialModule } from '../vollo-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { PaginaTitelComponent } from './pagina-titel/pagina-titel.component';
import { GroepComponent } from './groep/groep.component';
import { KruimelService } from './kruimel/kruimel.service';
import { KruimelpadComponent } from './kruimel/kruimelpad.component';
import { LeerlingComponent } from './leerling/leerling.component';
import { VolloKernStoreModule } from './vollo-kern-store';
import { LeerlingContainerComponent } from './leerling/leerling-container/leerling-container.component';
import { LeerlingViewComponent } from './leerling/leerling-view/leerling-view.component';
import { PlotlyModule } from 'angular-plotly.js';
import { ScoreGrafiekComponent } from './score/score-grafiek/score-grafiek.component';
import { ScoreTabelComponent } from './score/score-tabel/score-tabel.component';
import { NotitiesComponent } from './leerling/notities/notities.component';
import { MarkdownModule } from 'ngx-markdown';
import { NotitieNiveauOmschrijvingPipe } from './common/pipes/notitie-niveau-omschrijving.pipe';
import { NotitieNiveauIconComponent } from './leerling/notities/notitie-niveau-icon/notitie-niveau-icon.component';
import { LeerlingHistorieComponent } from './leerling/leerling-historie/leerling-historie.component';
import { LeerlingOudersComponent } from './leerling/leerling-ouders/leerling-ouders.component';
import { ContactModule } from './contact/contact.module';
import { GroepScoresComponent } from './score/groep-scores/groep-scores.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapViewComponent } from './map/map-view/map-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    VolloMaterialModule,
    AgGridModule.withComponents([]),
    VolloKernStoreModule,
    PlotlyModule,
    MarkdownModule.forRoot(),
    ContactModule,
    LeafletModule.forRoot()
  ],
  declarations: [
    MijnGroepenComponent,
    InloggenComponent,
    PaginaTitelComponent,
    GroepComponent,
    KruimelpadComponent,
    LeerlingComponent,
    LeerlingContainerComponent,
    LeerlingViewComponent,
    ScoreGrafiekComponent,
    ScoreTabelComponent,
    NotitiesComponent,
    NotitieNiveauOmschrijvingPipe,
    NotitieNiveauIconComponent,
    LeerlingHistorieComponent,
    LeerlingOudersComponent,
    GroepScoresComponent,
    MapViewComponent
  ],
  exports: [
    MijnGroepenComponent,
    InloggenComponent,
    PaginaTitelComponent,
    GroepComponent,
    KruimelpadComponent,
    LeerlingContainerComponent,
    GroepScoresComponent
  ],
  providers: [KruimelService]
})
export class VolloKernModule {}
