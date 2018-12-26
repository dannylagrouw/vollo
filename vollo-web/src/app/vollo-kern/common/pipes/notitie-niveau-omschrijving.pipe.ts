import { Pipe, PipeTransform } from '@angular/core';
import { NotitieNiveau } from '../model/notitie.model';

@Pipe({
  name: 'notitieNiveauOmschrijving'
})
export class NotitieNiveauOmschrijvingPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value === NotitieNiveau.PERSOONLIJK
      ? 'Zichtbaar voor jou'
      : value === NotitieNiveau.COLLEGAS
        ? "Zichtbaar voor collega's"
        : value === NotitieNiveau.OUDERS
          ? 'Zichtbaar voor ouders'
          : '';
  }
}
