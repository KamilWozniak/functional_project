/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import { propOrValue } from '@/helpers/object-helpers';
import curry           from 'lodash-es/curry';

interface CheckIfValueInArrayAttributes<T> {
  array: T[];
  arrayItemOptionalPath?: string;
  valueOptionalPath?: string;
  value: any;
}

interface CCheckIfValueInArrayAttributes<T> {
  array: T[];
  arrayItemOptionalPath?: string;
  valueOptionalPath?: string;
}

const checkIfValueInArray = <T>({ array, arrayItemOptionalPath, valueOptionalPath, value }: CheckIfValueInArrayAttributes<T>) => array
  .some((arrayItem: T) => propOrValue(arrayItem, arrayItemOptionalPath) === propOrValue(value, valueOptionalPath));

export const cCheckIfSameValueInOtherArray = curry(
  <T>({ array, arrayItemOptionalPath, valueOptionalPath }: CCheckIfValueInArrayAttributes<T>, value: any) => checkIfValueInArray({ array, arrayItemOptionalPath, valueOptionalPath, value }),
);
