import { DomeinObject } from '../common/domein-object.model';

export class School extends DomeinObject {
  id: number;
  naam: string;
  adres?: string;
  hoortBij?: School;
}

export class Groep extends DomeinObject {
  id: number;
  naam: string;
  school: School;
}
