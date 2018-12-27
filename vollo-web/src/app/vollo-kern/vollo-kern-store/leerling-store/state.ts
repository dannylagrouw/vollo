import { Leerling } from '../../groep/leerling.model';
import { Score } from '../../common/model/score.model';
import { Notitie } from '../../common/model/notitie.model';
import { LeerlingHistorieRecord } from '../../common/model/leerling-historie-record.model';
import { Ouder } from '../../common/model/ouder.model';

export interface State {
  geselecteerd?: number;
  leerling?: Leerling;
  scores?: Score[];
  notities?: Notitie[];
  notitieFormZichtbaar?: boolean;
  historie?: LeerlingHistorieRecord[];
  ouders?: Ouder[];
}

export const initialState: State = {
  geselecteerd: undefined,
  leerling: undefined,
  scores: undefined,
  notities: [],
  notitieFormZichtbaar: true,
  historie: [],
  ouders: []
};
