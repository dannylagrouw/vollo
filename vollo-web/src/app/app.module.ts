import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VolloKernModule } from './vollo-kern/vollo-kern.module';
import { NgxsModule } from '@ngxs/store';
import { VolloState } from './state/vollo.state';
import { InloggenService } from './service/inloggen.service';
import { FormsModule } from '@angular/forms';
import { InloggenComponent } from './vollo-kern/inloggen/inloggen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VolloMaterialModule } from './vollo-material.module';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MijnGroepenComponent } from './vollo-kern/mijn-groepen/mijn-groepen.component';

const appRoutes: Routes = [
  { path: 'inloggen', component: InloggenComponent },
  { path: 'mijngroepen', component: MijnGroepenComponent },
  {
    path: '',
    redirectTo: '/inloggen',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatIconModule,
    VolloMaterialModule,
    VolloKernModule,
    NgxsModule.forRoot([VolloState]),
    FlexLayoutModule
  ],
  providers: [MatIconRegistry, InloggenService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    matIconRegistry.setDefaultFontSetClass('fa');
  }
}
