import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {VolloKernModule} from './vollo-kern/vollo-kern.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VolloKernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
