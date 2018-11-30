import { Leerling } from './leerling.model';
import { Toetsafname } from '../common/model/toetsafname.model';

export class Groep {
  leerlingen: Leerling[];
  toetsen: Toetsafname[];
}
