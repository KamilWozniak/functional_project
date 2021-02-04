/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import { propOrValue } from '@/helpers/object-helpers';
import curry           from 'lodash-es/curry';

interface CheckIfValueInArrayAttributes<T> {
  array: T[];
  arrayItemOptionalPath?: string;
  valueOptionalPath?: string;
  value: any;
}

type CheckIfSameValueInOtherArrayPayload<T> = Omit<CheckIfValueInArrayAttributes<T>, 'value'>;

export const checkIfValueInArray = <T>({ array, arrayItemOptionalPath, valueOptionalPath, value }: CheckIfValueInArrayAttributes<T>) => array
  .some((arrayItem: T) => propOrValue(arrayItem, arrayItemOptionalPath) === propOrValue(value, valueOptionalPath));

export const cCheckIfSameValueInOtherArray = curry(
  <T>(payload: CheckIfSameValueInOtherArrayPayload<T>, value: any) => checkIfValueInArray({ ...payload, value }),
);
