import { DomeinObject } from '../domein-object.model';

export class Toets extends DomeinObject {
  soort: string;
  soortScore: 'LETTER_A_Z' | 'CIJFER_1_10' | 'SCORE_500';
  omschrijving: string;
}
