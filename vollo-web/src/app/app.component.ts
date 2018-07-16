import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GebruikerState } from './state/vollo.state';

@Component({
  selector: 'vollo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vollo';
  @Select(state => state.vollo.gebruiker)
  gebruiker$: Observable<GebruikerState>;
}
