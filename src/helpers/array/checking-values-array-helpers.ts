/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import { prop } from '@/helpers/object-helpers';
import curry    from 'lodash-es/curry';

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

export const checkIfValueInArray = <T>({ array, arrayItemOptionalPath, valueOptionalPath, value }: CheckIfValueInArrayAttributes<T>) => array
  .some((arrayItem: T) => prop(arrayItem, arrayItemOptionalPath) === prop(value, valueOptionalPath));

export const cCheckIfSameValueInOtherArray = curry(
  <T>({ array, arrayItemOptionalPath, valueOptionalPath }: CCheckIfValueInArrayAttributes<T>, value: any) => checkIfValueInArray({ array, arrayItemOptionalPath, valueOptionalPath, value }),
);
