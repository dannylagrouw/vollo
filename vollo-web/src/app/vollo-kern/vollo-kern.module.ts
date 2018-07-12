import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MijnGroepenComponent } from "./mijn-groepen/mijn-groepen.component";
import { InloggenComponent } from "./inloggen/inloggen.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [MijnGroepenComponent, InloggenComponent],
  exports: [MijnGroepenComponent, InloggenComponent]
})
export class VolloKernModule {}
