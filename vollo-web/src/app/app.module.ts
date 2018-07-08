import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {VolloKernModule} from './vollo-kern/vollo-kern.module';
import {NgxsModule} from '@ngxs/store';
import {VolloState} from './state/vollo.state';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VolloKernModule,
    NgxsModule.forRoot([VolloState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
