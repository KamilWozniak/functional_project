/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import curry                    from 'lodash-es/curry';
import { uniq }                 from 'lodash-es';
import { ObjectWithStringKeys } from '@/types';

export const cGetFirstItemsOfArray = curry(<T>(numberOfItems: number, arr: T[]): T[] => arr.slice(0, numberOfItems));
export const getUniqueArrayValues = (array: any[]): any[] => uniq(array);
export const getArrayOfObjectPropsReducerFunction = (propName: string): Function => <T>(acc: T[], curr: ObjectWithStringKeys<any>): T[] => [ ...acc, curr[ propName ] ];
