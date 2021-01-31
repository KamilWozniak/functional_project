import { AxiosPromise }                from 'axios';
import { curry, flow }                 from 'lodash-es';
import { UserServerResponse }          from '@/root/root.types';
import { cProp }                       from '@/helpers/object-helpers';
import { cGetNameForGenderPrediction } from '@/helpers/user/user-helpers';
import { cGetUserGenderByName }        from '@/views/home/home.service';
import { CurriedFunction1 }            from '@/types';

const getGenderPromise = (user: UserServerResponse): AxiosPromise => flow([
  cProp('name'),
  cGetNameForGenderPrediction,
  cGetUserGenderByName,
])(user);
export const cGetGenderPromise: CurriedFunction1<UserServerResponse, AxiosPromise> = curry(getGenderPromise);
