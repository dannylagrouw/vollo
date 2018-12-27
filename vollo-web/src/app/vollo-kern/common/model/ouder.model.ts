import { DomeinObject } from '../domein-object.model';
import { Geslacht } from './geslacht.enum';
import { Adres } from './adres.model';

export class Ouder extends DomeinObject {
  voornaam?: string;
  tussenvoegsel?: string;
  achternaam?: string;
  geslacht?: Geslacht;
  adres?: Adres;
}

export function volledigeNaam(ouder: Ouder) {
  return ouder.tussenvoegsel
    ? `${ouder.voornaam} ${ouder.tussenvoegsel} ${ouder.achternaam}`
    : `${ouder.voornaam} ${ouder.achternaam}`;
}
