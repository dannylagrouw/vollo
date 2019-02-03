import { DomeinObject } from '../domein-object.model';
import { Geslacht } from './geslacht.enum';

export class GroepScore extends DomeinObject {
  cijferScore?: number;
  letterScore?: string;
  datum?: Date;
  omschrijving?: string;
  toetsOmschrijving?: string;
  toetsSoort?: string;
  toetsSoortScore?: 'LETTER_A_F' | 'CIJFER_1_10' | 'SCORE_500';
  roepnaam?: string;
  tussenvoegsel?: string;
  achternaam?: string;
  leerlingId?: number;
  geslacht?: Geslacht;
  geboortedatum?: Date;
  latitude?: number;
  longitude?: number;
}
