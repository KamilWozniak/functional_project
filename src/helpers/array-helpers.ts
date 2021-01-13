/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import flow                 from 'lodash-es/flow';
import curry                from 'lodash-es/curry';
import { CurriedFunction1 } from '@/types';

export const createArrayOfGivenLength = (arrayLength: number): undefined[] => [ ...Array(arrayLength) ];

// DANGER: function is not referentially transparent (does not return same output for same input)!
export const shuffleArray = <T>(array: T[]): T[] => {
  const arrayCopy: T[] = [ ...array ];
  arrayCopy.forEach((item: T, index: number) => {
    const secondIndex: number = Math.floor(Math.random() * (index + 1));
    [ arrayCopy[ index ], arrayCopy[ secondIndex ] ] = [ arrayCopy[ secondIndex ], arrayCopy[ index ] ];
  });
  return arrayCopy;
};

export const cFillArrayWithValues = curry((fillerFunction: (value: any, index: number) => any, array: any[]): any[] => array.map(fillerFunction));
export const fillArrayWithSubsequentNumbersStartingFromOne: CurriedFunction1<any[], any[]> = cFillArrayWithValues(((value, index) => index + 1));

export const createArrayWithUniqueRandomNumbersStartedFromOne: (arrayLength: number) => number[] = flow([
  createArrayOfGivenLength,
  fillArrayWithSubsequentNumbersStartingFromOne,
  shuffleArray,
]);

export const reduce = <T>(initialValue: T, reducerFunction: (acc: T, curr: any) => T, arr: any[]): any => arr.reduce(reducerFunction, initialValue);
export const cMap = curry((mapperFn: (value: any, index: number) => any, array: any[]) => array.map(mapperFn));

export const cGetFirstItemsOfArray = curry((numberOfItems: number, arr: any[]) => arr.slice(0, numberOfItems));
