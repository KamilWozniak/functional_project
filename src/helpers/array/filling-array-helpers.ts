/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import curry                from 'lodash-es/curry';
import { CurriedFunction1 } from '@/types';

const cFillArrayWithValues = curry((fillerFunction: (value: any, index: number) => any, array: any[]): any[] => array.map(fillerFunction));
export const cFillArrayWithSubsequentNumbersStartingFromOne: CurriedFunction1<any[], any[]> = cFillArrayWithValues(((value: any, index: number) => index + 1));
