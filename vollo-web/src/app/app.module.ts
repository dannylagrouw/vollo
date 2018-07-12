import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VolloKernModule } from "./vollo-kern/vollo-kern.module";
import { NgxsModule } from "@ngxs/store";
import { VolloState } from "./state/vollo.state";
import { InloggenService } from "./service/inloggen.service";
import { FormsModule } from "@angular/forms";
import { InloggenComponent } from "./vollo-kern/inloggen/inloggen.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VolloKernModule, NgxsModule.forRoot([VolloState])],
  providers: [InloggenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
