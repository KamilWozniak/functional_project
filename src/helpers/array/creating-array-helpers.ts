/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import flow                                              from 'lodash-es/flow';
import { fillArrayWithSubsequentNumbersStartingFromOne } from '@/helpers/array/filling-array-helpers';
import { shuffleArray }                                  from '@/helpers/array/order-array-helpers';

export const createArrayOfGivenLength = (arrayLength: number): undefined[] => [ ...Array(arrayLength) ];
export const createArrayWithUniqueRandomNumbersStartedFromOne: (arrayLength: number) => number[] = flow([
  createArrayOfGivenLength,
  fillArrayWithSubsequentNumbersStartingFromOne,
  shuffleArray,
]);
