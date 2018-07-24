import { Leerling } from './leerling.model';
import { Toets } from './toets.model';

export class Groep {
  leerlingen: Leerling[];
  toetsen: Toets[];
}
