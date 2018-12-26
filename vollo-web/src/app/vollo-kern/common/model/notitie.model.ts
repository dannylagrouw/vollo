import { DomeinObject } from '../domein-object.model';
import { Medewerker } from './medewerker.model';

export enum NotitieNiveau {
  PERSOONLIJK = 'PERSOONLIJK',
  COLLEGAS = 'COLLEGAS',
  OUDERS = 'OUDERS'
}

export class Notitie extends DomeinObject {
  _type = 'NOTITIE';
  tekst?: string;
  datum?: Date;
  medewerker?: Medewerker;
  notitieNiveau = NotitieNiveau.PERSOONLIJK;

  constructor(notitie: Partial<Notitie>) {
    super();
    this.tekst = notitie.tekst;
    this.notitieNiveau = notitie.notitieNiveau;
  }
}
