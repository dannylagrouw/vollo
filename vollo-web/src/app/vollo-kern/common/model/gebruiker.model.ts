import { DomeinObject } from '../domein-object.model';

export interface Gebruiker extends DomeinObject {
  gebruikersnaam: string;
  rollen: string[];
}
