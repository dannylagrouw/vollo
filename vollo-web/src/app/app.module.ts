import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VolloKernModule } from "./vollo-kern/vollo-kern.module";
import { NgxsModule } from "@ngxs/store";
import { VolloState } from "./state/vollo.state";
import { InloggenService } from "./service/inloggen.service";
import { FormsModule } from "@angular/forms";
import { InloggenComponent } from "./vollo-kern/inloggen/inloggen.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { VolloMaterialModule } from "./vollo-material.module";
import { MatIconModule, MatIconRegistry } from "@angular/material";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    VolloMaterialModule,
    VolloKernModule,
    NgxsModule.forRoot([VolloState])
  ],
  providers: [MatIconRegistry, InloggenService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias("fontawesome", "fa");
    matIconRegistry.setDefaultFontSetClass("fa");
  }
}
