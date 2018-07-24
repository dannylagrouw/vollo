import { DomeinObject } from '../common/domein-object.model';

export class Toets extends DomeinObject {
  datum: Date;
  soort: string;
  soortScore: 'LETTER_A_Z' | 'CIJFER_1_10';
  omschrijving: string;
}
