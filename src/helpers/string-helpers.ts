import { curry } from 'lodash-es';

export const cSplit = curry((separator: string, word: string): string[] => word.split(separator));
export const trim = (word: string): string => word.trim();
export const toLowerCase = (word: string): string => word.toLowerCase();
