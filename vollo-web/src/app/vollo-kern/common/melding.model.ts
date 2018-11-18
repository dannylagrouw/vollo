export class Melding {
  aanleiding: string;
  foutmelding: string;

  //TODO foutmelding => (melding)tekst
  constructor(aanleiding: string, foutmelding: string) {
    this.aanleiding = aanleiding;
    this.foutmelding = foutmelding;
  }
}
