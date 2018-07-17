import { DomeinObject } from '../common/domein-object.model';

export class School extends DomeinObject {
  naam: string;
  adres?: string;
  hoortBij?: School;
}

export class Groep extends DomeinObject {
  naam: string;
  school: School;
}
