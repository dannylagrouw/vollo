import { DomeinObject } from '../domein-object.model';

export class Medewerker extends DomeinObject {
  voornaam?: string;
  tussenvoegsel?: string;
  achternaam?: string;

  volledigeNaam() {
    return this.tussenvoegsel
      ? `${this.voornaam} ${this.tussenvoegsel} ${this.achternaam}`
      : `${this.voornaam} ${this.achternaam}`;
  }
}
