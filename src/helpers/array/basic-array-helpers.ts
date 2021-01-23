/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import curry from 'lodash-es/curry';

export const cReduce = curry(<T>(initialValue: T, reducerFunction: (acc: T, curr: any) => T, array: any[]) => array.reduce(reducerFunction, initialValue));
export const cMap = curry(<T>(mapperFn: (value: T, index: number) => any, array: T[]) => array.map(mapperFn));
export const cFilter = curry(<T>(filterFn: (item: T) => boolean, array: T[]) => array.filter(filterFn));
export const cSort = curry(<T>(sortingFn: (a: T, b: T) => number, array: T[]) => array.sort(sortingFn));
