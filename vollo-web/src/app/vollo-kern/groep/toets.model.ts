import { DomeinObject } from '../common/domein-object.model';

export class Toets extends DomeinObject {
  soort: string;
  soortScore: 'LETTER_A_Z' | 'CIJFER_1_10';
  omschrijving: string;
}

export class Toetsafname extends DomeinObject {
  datum: Date;
  omschrijving: string;
  toets: Toets;
}
