import { AxiosPromise }                                   from 'axios';
import { flatten, flow }                                  from 'lodash-es';
import { GenderizeAPIResponse, User, UserServerResponse } from '@/root/root.types';
import { cProp }                                          from '@/helpers/object-helpers';
import { getNameForGenderPrediction }                     from '@/helpers/user/user-helpers';
import { cMap }                                           from '@/helpers/array/basic-array-helpers';
import { cSplitArrayIntoSmallArrays }                     from '@/helpers/array/creating-array-helpers';
import { getGenders }                                     from '@/views/home/home.service';
import {
  cCatch,
  cThen,
  handleBasicError,
  promiseAll,
}                                                         from '@/helpers/promise-helpers';
import { extractDataFromAxiosResponsesArray }             from '@/helpers/axios-helpers';

export const getUserNameForGenderPrediction = (user: UserServerResponse): AxiosPromise => flow([
  cProp('name'),
  getNameForGenderPrediction,
])(user);

export const getUserGenders = async (users: UserServerResponse[] | User[]): Promise<GenderizeAPIResponse[]> => flow([
  cMap(getUserNameForGenderPrediction),
  cSplitArrayIntoSmallArrays(10),
  cMap(getGenders),
  promiseAll,
  cThen(extractDataFromAxiosResponsesArray),
  cThen(flatten),
  cCatch(handleBasicError),
])(users);
