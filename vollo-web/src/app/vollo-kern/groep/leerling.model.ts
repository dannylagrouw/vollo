import { DomeinObject } from '../common/domein-object.model';

export class Leerling extends DomeinObject {
  voornamen: string;
  roepnaam: string;
  tussenvoegsel: string;
  achternaam: string;
  geboortedatum: Date;
  geslacht: 'MAN' | 'VROUW' | 'OVERIG';
  scores: (string | number)[];
  foto: string;

  // volledigeNaam() {
  //   return this.tussenvoegsel
  //     ? `${this.roepnaam} ${this.tussenvoegsel} ${this.achternaam}`
  //     : `${this.roepnaam} ${this.achternaam}`;
  // }
}

export function fromServer(leerling: Leerling) {
  return {
    ...leerling,
    foto: leerling.foto ? 'data:image/png;charset=utf-8;base64,' + leerling.foto : undefined
  };
}
