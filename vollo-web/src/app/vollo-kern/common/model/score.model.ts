import { DomeinObject } from '../domein-object.model';
import { Toetsafname } from './toetsafname.model';

export class Score extends DomeinObject {
  toetsafname: Toetsafname;
  letterScore?: string;
  cijferScore?: number;
}
