import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { InloggenAction } from "../../state/vollo.state";
import { Observable } from "rxjs";

@Component({
  selector: "vollo-inloggen",
  templateUrl: "./inloggen.component.html",
  styleUrls: ["./inloggen.component.scss"]
})
export class InloggenComponent implements OnInit {
  @Select(state => state.vollo.token)
  token$: Observable<string>;

  form = {
    gebruikersnaam: "",
    wachtwoord: ""
  };

  constructor(private store: Store) {}

  ngOnInit() {}

  inloggen() {
    this.store.dispatch(new InloggenAction(this.form.gebruikersnaam, this.form.wachtwoord));
  }
}
