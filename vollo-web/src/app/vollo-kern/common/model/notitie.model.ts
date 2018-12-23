import { DomeinObject } from '../domein-object.model';
import { Medewerker } from './medewerker.model';

export class Notitie extends DomeinObject {
  _type = 'NOTITIE';
  tekst?: string;
  datum?: Date;
  medewerker?: Medewerker;

  constructor(tekst: string) {
    super();
    this.tekst = tekst;
  }
}
