import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { Notitie } from '../../common/model/notitie.model';
import { LeerlingHistorieRecord } from '../../common/model/leerling-historie-record.model';

export interface State {
  geselecteerd?: number;
  leerling?: Leerling;
  scores?: Score[];
  notities?: Notitie[];
  notitieFormZichtbaar?: boolean;
  historie?: LeerlingHistorieRecord[];
}

export const initialState: State = {
  geselecteerd: undefined,
  leerling: undefined,
  scores: undefined,
  notities: [],
  notitieFormZichtbaar: true,
  historie: []
};
