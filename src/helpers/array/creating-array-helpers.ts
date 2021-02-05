/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import { cFillArrayWithSubsequentNumbersStartingFromOne } from '@/helpers/array/filling-array-helpers';
import { shuffleArray }                                   from '@/helpers/array/order-array-helpers';
import { cloneDeep, curry, flow }                         from 'lodash-es';

const createArrayOfGivenLength = (arrayLength: number): undefined[] => [ ...Array(arrayLength) ];
export const createArrayWithUniqueRandomNumbersStartedFromOne: (arrayLength: number) => number[] = flow([
  createArrayOfGivenLength,
  cFillArrayWithSubsequentNumbersStartingFromOne,
  shuffleArray,
]);

export const splitArrayIntoSmallArrays = <T>(singleArraySize: number, array: T[]): Array<T[]> => {
  if (!singleArraySize) {
    return [];
  }

  return array.reduce((acc: Array<T[]>, curr: T, index: number) => {
    const actual: Array<T[]> = cloneDeep(acc);

    if (index % singleArraySize !== 0) {
      actual[ actual.length - 1 ].push(curr);
      return actual;
    }
    actual.push([ curr ]);
    return actual;
  }, []);
};
export const cSplitArrayIntoSmallArrays = curry(splitArrayIntoSmallArrays);
