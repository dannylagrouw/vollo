import { DomeinObject } from '../domein-object.model';
import { Toets } from './toets.model';

export class Toetsafname extends DomeinObject {
  omschrijving?: string;
  toets: Toets;
  datum: Date;
}
