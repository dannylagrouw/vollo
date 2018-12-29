import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolloMaterialModule } from '../../vollo-material.module';
import { AdresregelComponent } from './adresregel/adresregel.component';
import { EmailregelComponent } from './emailregel/emailregel.component';
import { TelefoonregelComponent } from './telefoonregel/telefoonregel.component';

@NgModule({
  imports: [CommonModule, VolloMaterialModule],
  declarations: [AdresregelComponent, EmailregelComponent, TelefoonregelComponent],
  exports: [AdresregelComponent, EmailregelComponent, TelefoonregelComponent],
  providers: []
})
export class ContactModule {}
