import { AxiosPromise }               from 'axios';
import { flow }                       from 'lodash-es';
import { UserServerResponse }         from '@/root/root.types';
import { cProp }                      from '@/helpers/object-helpers';
import { getNameForGenderPrediction } from '@/helpers/user/user-helpers';

export const getUserNameForGenderPrediction = (user: UserServerResponse): AxiosPromise => flow([
  cProp('name'),
  getNameForGenderPrediction,
])(user);
