import { Leerling } from './leerling.model';
import { Toetsafname } from './toets.model';

export class Groep {
  leerlingen: Leerling[];
  toetsen: Toetsafname[];
}
