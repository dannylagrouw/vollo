import { DomeinObject } from '../common/domein-object.model';

export class Leerling extends DomeinObject {
  voornamen: string;
  roepnaam: string;
  tussenvoegsel: string;
  achternaam: string;
  geboortedatum: Date;
  geslacht: 'MAN' | 'VROUW' | 'OVERIG';
}
